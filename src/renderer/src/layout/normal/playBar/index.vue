<template>
    <div class="w-full h-full p-3 flex items-center justify-between gap-3">
        <div class="w-full h-full">
            <MusicInfo
                :cover-img="playerStore.currentSongInfo?.coverImg"
                :title="playerStore.currentSongInfo?.title"
                :artist="playerStore.currentSongInfo?.artist"
                :album="playerStore.currentSongInfo?.album"></MusicInfo>
        </div>
        <div class="w-full h-full">2</div>
        <div class="w-full h-full">3</div>
    </div>
</template>
<script setup lang="ts">
import MusicInfo from './MusicInfo.vue'
import { usePlayerStore } from '@renderer/stores/player'
// 播放器状态管理
const playerStore = usePlayerStore()
</script>
