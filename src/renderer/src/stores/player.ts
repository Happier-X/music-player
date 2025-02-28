import { api } from '@renderer/api'
import { Howl } from 'howler'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 播放器状态管理
export const usePlayerStore = defineStore('player', () => {
    // 音频播放器实例
    const sound = ref<Howl | null>(null)
    // 当前播放歌曲的信息
    const currentSongInfo = ref(null)
    // 播放队列
    const playQueue = ref([])
    // 当前播放索引
    const currentPlayIndex = ref(0)
    // 是否正在播放
    const isPlaying = ref(false)
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
                html5: true,
                onend: () => {
                    playNext()
                }
            })
            sound.value?.play()
            isPlaying.value = true
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * 播放下一首
     */
    function playNext() {
        isPlaying.value = false
        if (currentPlayIndex.value < playQueue.value.length - 1) {
            currentPlayIndex.value++
        } else {
            currentPlayIndex.value = 0
        }
        play(playQueue.value[currentPlayIndex.value], playQueue.value)
    }
    /**
     * 播放上一首
     */
    function playPrevious() {
        isPlaying.value = false
        if (currentPlayIndex.value > 0) {
            currentPlayIndex.value--
        } else {
            currentPlayIndex.value = playQueue.value.length - 1
        }
        play(playQueue.value[currentPlayIndex.value], playQueue.value)
    }
    /**
     * 暂停播放
     */
    function pause() {
        sound.value?.pause()
        isPlaying.value = false
    }
    /**
     * 继续播放
     */
    function resume() {
        sound.value?.play()
        isPlaying.value = true
    }
    return {
        play,
        playNext,
        playPrevious,
        currentSongInfo,
        isPlaying,
        playQueue,
        pause,
        resume
    }
})
