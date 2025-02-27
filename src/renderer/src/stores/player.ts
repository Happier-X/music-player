import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Howl } from 'howler'
import { api } from '@renderer/api'

export const usePlayerStore = defineStore('player', () => {
    // 音频播放器实例
    const sound = ref<Howl | null>(null)
    // 播放歌曲
    async function play(id) {
        sound.value?.stop()
        try {
            let url = await api.getStreamUrl({ id })
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
        play
    }
})
