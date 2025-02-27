import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Howl } from 'howler'
import { api } from '@renderer/api'

export const usePlayerStore = defineStore('player', () => {
    // 音频播放器实例
    const sound = ref<Howl | null>(null)
    // 当前播放歌曲的信息
    const currentSongInfo = ref(null)
    /**
     * 播放歌曲
     */
    async function play(song) {
        currentSongInfo.value = song
        sound.value?.stop()
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
    return {
        play,
        currentSongInfo
    }
})
