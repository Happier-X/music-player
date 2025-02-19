<template>
    <div class="w-full h-full">
        <div class="w-full h-[50px] flex items-center">
            <div class="text-2xl font-bold">设置</div>
        </div>
        <div
            role="tablist"
            class="tabs tabs-border w-full h-[50px] flex items-center">
            <a
                role="tab"
                class="tab"
                :class="{ 'tab-active': item.value === activeTab }"
                v-for="(item, index) in tabs"
                :key="index"
                @click="handleClickTab(item)">
                {{ item.label }}
            </a>
        </div>
        <div class="w-full h-[calc(100%-100px)]">
            <MediaLibrary />
        </div>
    </div>
</template>
<script setup lang="ts">
import MediaLibrary from './components/mediaLibrary/index.vue'
import { ref } from 'vue'
// 标签页
const tabs = ref([{ value: 'mediaLibrary', label: '媒体库' }])
// 当前标签
const activeTab = ref('mediaLibrary')
/**
 * 点击标签
 */
function handleClickTab(item: { value: string; label: string }) {
    activeTab.value = item.value
}
</script>
