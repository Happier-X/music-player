import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Howl } from 'howler'
import { api } from '@renderer/api'

export const usePlayerStore = defineStore('player', () => {
    // 音频播放器实例
    const sound = ref<Howl | null>(null)
    // 当前播放歌曲的信息
    const currentSongInfo = ref(null)
    // 播放队列
    const playQueue = ref([])
    // 当前播放索引
    const currentPlayIndex = ref(0)
    /**
     * 播放歌曲
     */
    async function play(song, queue) {
        currentSongInfo.value = song
        playQueue.value = queue
        currentPlayIndex.value = queue.findIndex((item) => item.id === song.id)
        sound.value?.unload()
        try {
            let url = await api.getStreamUrl({ id: song.id })
            sound.value = new Howl({
                src: [url],
                html5: true
            })
            sound.value?.play()
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * 播放下一首
     */
    function playNext() {
        currentPlayIndex.value++
        play(playQueue.value[currentPlayIndex.value], playQueue.value)
    }
    /**
     * 播放上一首
     */
    function playPrevious() {
        currentPlayIndex.value--
        play(playQueue.value[currentPlayIndex.value], playQueue.value)
    }
    return {
        play,
        playNext,
        playPrevious,
        currentSongInfo
    }
})
