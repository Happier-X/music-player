<template>
    <div class="w-full h-full flex items-center justify-end">
        <label
            for="my-drawer"
            class="drawer-button btn btn-sm btn-circle btn-ghost">
            <PlayQueueIcon
                size="20"
                @click="handleShowPlayQueue"></PlayQueueIcon>
        </label>
    </div>
    <div class="drawer drawer-end">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
            <label
                for="my-drawer"
                aria-label="close sidebar"
                class="drawer-overlay"></label>
            <div class="bg-base-200 h-full w-80 p-4">
                <SongList :list="playerStore.playQueue"></SongList>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { RiPlayListFill as PlayQueueIcon } from '@remixicon/vue'
import { usePlayerStore } from '@renderer/stores/player'
import SongList from '@renderer/components/SongList.vue'

const playerStore = usePlayerStore()

function handleShowPlayQueue() {
    console.log(playerStore.playQueue)
}
</script>
