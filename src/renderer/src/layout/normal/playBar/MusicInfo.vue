<template>
    <div class="h-full flex items-center gap-3">
        <div>
            <img class="size-12 rounded-box" :src="coverImg" />
        </div>
        <div>
            <div>{{ title }}</div>
            <div class="text-xs font-semibold opacity-60">
                {{ artist }} - {{ album }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
/**
 * 接收的属性
 */
defineProps({
    coverImg: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    artist: {
        type: String,
        default: ''
    },
    album: {
        type: String,
        default: ''
    }
})
</script>
