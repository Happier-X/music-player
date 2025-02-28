<template>
    <div class="w-full h-full overflow-y-scroll scrollbar-hide">
        <ul class="list">
            <li
                class="list-row"
                v-for="(item, index) in list"
                :key="index"
                @dblclick="handlePlay(item)">
                <div
                    class="w-16 text-center text-4xl font-thin opacity-30 tabular-nums">
                    {{ index + 1 }}
                </div>
                <div>
                    <img class="size-10 rounded-box" :src="item.coverImg" />
                </div>
                <div class="list-col-grow">
                    <div>{{ item.title }}</div>
                    <div class="text-xs font-semibold opacity-60">
                        {{ item.artist }} - {{ item.album }}
                    </div>
                </div>
                <button class="btn btn-circle btn-ghost">
                    <MoreIcon />
                </button>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { RiMore2Line as MoreIcon } from '@remixicon/vue'
import { usePlayerStore } from '@renderer/stores/player'
/**
 * 接收的属性
 */
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
// 播放器状态管理
const playerStore = usePlayerStore()
/**
 * 播放歌曲
 */
function handlePlay(item) {
    playerStore.play(item, props.list)
}
</script>
