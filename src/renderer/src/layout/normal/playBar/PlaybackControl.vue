<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <div class="w-full h-full flex items-center justify-center gap-4">
            <button class="btn btn-sm btn-circle btn-ghost">
                <component :is="SingleLoopIcon" size="18"></component>
            </button>
            <button class="btn btn-sm btn-circle btn-ghost">
                <PreviousIcon size="20"></PreviousIcon>
            </button>
            <button class="btn btn-circle">
                <component :is="PlayIcon"></component>
            </button>
            <button class="btn btn-sm btn-circle btn-ghost">
                <NextIcon size="20"></NextIcon>
            </button>
            <button class="btn btn-sm btn-circle btn-ghost">
                <component :is="OrderPlayIcon" size="18"></component>
            </button>
        </div>
        <div class="w-full h-full">
            <input
                type="range"
                min="0"
                max="100"
                value="50"
                class="w-full range range-xs" />
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    RiPlayFill as PlayIcon,
    RiPauseFill as PauseIcon,
    RiSkipBackFill as PreviousIcon,
    RiSkipForwardFill as NextIcon,
    RiRepeatOneFill as SingleLoopIcon,
    RiRepeat2Fill as ListLoopIcon,
    RiOrderPlayFill as OrderPlayIcon,
    RiShuffleFill as ShufflePlayIcon
} from '@remixicon/vue'
</script>
