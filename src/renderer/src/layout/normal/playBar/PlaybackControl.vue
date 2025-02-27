<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-full flex items-center justify-center gap-4">
            <button class="btn btn-sm btn-circle btn-ghost">
                <PreviousIcon></PreviousIcon>
            </button>
            <button class="btn btn-circle">
                <component :is="PlayIcon"></component>
            </button>
            <button class="btn btn-sm btn-circle btn-ghost">
                <NextIcon></NextIcon>
            </button>
        </div>
        <div class="w-full h-full">
            <input
                type="range"
                min="0"
                max="100"
                value="40"
                class="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    RiPlayFill as PlayIcon,
    RiPauseFill as PauseIcon,
    RiSkipBackFill as PreviousIcon,
    RiSkipForwardFill as NextIcon
} from '@remixicon/vue'
</script>
