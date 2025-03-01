import { api } from '@renderer/api'
import { Howl } from 'howler'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { shuffle } from '@renderer/utils/shuffle'

// 播放器状态管理
export const usePlayerStore = defineStore('player', () => {
    // 音频播放器实例
    const sound = ref<Howl | null>(null)
    // 当前播放歌曲的信息
    const currentSongInfo = ref<any>(null)
    // 播放队列
    const playQueue = ref<any[]>([])
    // 当前播放索引
    const currentPlayIndex = ref(0)
    // 是否正在播放
    const isPlaying = ref(false)
    // 循环模式，0：列表循环，1：单曲循环
    const loopMode = ref(0)
    // 播放模式，0：顺序播放，1：随机播放
    const playMode = ref(0)
    /**
     * 设置播放队列
     */
    function setPlayQueue(list) {
        if (playMode.value === 1) {
            playQueue.value = shuffle(list)
            currentPlayIndex.value = playQueue.value.findIndex(
                (item) => item.id === currentSongInfo.value?.id
            )
        } else {
            playQueue.value = list
            currentPlayIndex.value = playQueue.value.findIndex(
                (item) => item.id === currentSongInfo.value?.id
            )
        }
    }
    /**
     * 加载歌曲
     */
    async function loadSong(song) {
        currentSongInfo.value = song
        sound.value?.unload()
        try {
            let url = await api.getStreamUrl({ id: song.id })
            sound.value = new Howl({
                src: [url],
                html5: true,
                onend: async () => {
                    if (loopMode.value === 0) {
                        playNext()
                    } else {
                        await loadSong(playQueue.value[currentPlayIndex.value])
                        play()
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * 播放歌曲
     */
    function play() {
        sound.value?.play()
        isPlaying.value = true
    }
    /**
     * 播放下一首
     */
    async function playNext() {
        isPlaying.value = false
        if (currentPlayIndex.value < playQueue.value.length - 1) {
            currentPlayIndex.value++
        } else {
            currentPlayIndex.value = 0
        }
        await loadSong(playQueue.value[currentPlayIndex.value])
        play()
    }
    /**
     * 播放上一首
     */
    async function playPrevious() {
        isPlaying.value = false
        if (currentPlayIndex.value > 0) {
            currentPlayIndex.value--
        } else {
            currentPlayIndex.value = playQueue.value.length - 1
        }
        await loadSong(playQueue.value[currentPlayIndex.value])
        play()
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
    /**
     * 设置循环模式，0：列表循环，1：单曲循环
     */
    function setLoopMode(mode) {
        loopMode.value = mode
    }
    /**
     * 设置播放模式，0：顺序播放，1：随机播放
     */
    function setPlayMode(mode) {
        playMode.value = mode
        setPlayQueue(playQueue.value)
    }
    return {
        setPlayQueue,
        loadSong,
        play,
        playNext,
        playPrevious,
        currentSongInfo,
        isPlaying,
        playQueue,
        pause,
        resume,
        loopMode,
        playMode,
        setLoopMode,
        setPlayMode
    }
})
