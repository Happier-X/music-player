<template>
    <div class="w-full h-full overflow-y-scroll scrollbar-hide">
        <ul class="list">
            <li class="list-row" v-for="(item, index) in list" :key="index">
                <!-- <div
                    class="w-15 text-center text-4xl font-thin opacity-30 tabular-nums">
                    {{ index + 1 }}
                </div> -->
                <div>
                    <img class="size-10 rounded-box" :src="item.coverImg" />
                </div>
                <div>
                    <div>{{ item.title }}</div>
                    <div class="text-xs font-semibold opacity-60">
                        {{ item.artist }} - {{ item.album }}
                    </div>
                </div>
                <button class="btn btn-square btn-ghost">
                    <svg
                        class="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <g
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2"
                            fill="none"
                            stroke="currentColor">
                            <path d="M6 3L20 12 6 21 6 3z"></path>
                        </g>
                    </svg>
                </button>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { api } from '@renderer/api'
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
</script>
