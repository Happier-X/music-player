<template>
    <div class="settings-container">
        <div class="settings-header">
            <div class="settings-header-title">设置</div>
        </div>
        <div class="settings-tabs">
            <n-tabs
                ref="tabsRef"
                v-model:value="tabsValue"
                @update:value="handleUpdateValue">
                <n-tab
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :name="tab.name">
                    {{ tab.label }}
                </n-tab>
            </n-tabs>
        </div>
        <div class="settings-content">
            <n-scrollbar ref="scrollbarRef">
                <div ref="mediaLibraryRef">
                    <MediaLibrary />
                </div>
                <div ref="generalRef">
                    <General />
                </div>
            </n-scrollbar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NTabs, NTab, NScrollbar } from 'naive-ui'
import MediaLibrary from './components/MediaLibrary.vue'
import General from './components/General.vue'
import type { TabsInst, ScrollbarInst } from 'naive-ui'
import { ref, useTemplateRef } from 'vue'
// 标签页实例
const tabsRef = useTemplateRef<TabsInst>('tabsRef')
// 标签页值
const tabsValue = ref('mediaLibrary')
// 标签页
const tabs = ref([
    { name: 'mediaLibrary', label: '媒体库' },
    { name: 'general', label: '通用' }
])
// 滚动条实例
const scrollbarRef = useTemplateRef<ScrollbarInst>('scrollbarRef')
// 媒体库实例
const mediaLibraryRef = useTemplateRef<HTMLElement>('mediaLibraryRef')
// 通用实例
const generalRef = useTemplateRef<HTMLElement>('generalRef')
/**
 * tabs值变化
 */
function handleUpdateValue(value: string) {
    if (value === 'mediaLibrary' && mediaLibraryRef.value) {
        scrollbarRef.value?.scrollTo({
            top: mediaLibraryRef.value.offsetTop,
            behavior: 'smooth'
        })
    } else if (value === 'general' && generalRef.value) {
        scrollbarRef.value?.scrollTo({
            top: generalRef.value.offsetTop,
            behavior: 'smooth'
        })
    }
}
</script>
<style scoped lang="scss">
.settings-container {
    width: 100%;
    height: 100%;
    .settings-header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        .settings-header-title {
            font-size: 20px;
            font-weight: bold;
        }
    }
    .settings-tabs {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .settings-content {
        width: 100%;
        height: calc(100% - 100px);
    }
}
</style>
