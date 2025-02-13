<template>
    <div class="settings-container">
        <div class="settings-header">
            <div class="settings-header-title">设置</div>
        </div>
        <div class="settings-tabs">
            <n-tabs type="line">
                <n-tab name="mediaLibrary">媒体库</n-tab>
                <n-tab name="general">通用</n-tab>
            </n-tabs>
        </div>
        <div class="settings-content">
            <n-scrollbar>
                <MediaLibrary />
            </n-scrollbar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NTabs, NTab, NScrollbar } from 'naive-ui'
import MediaLibrary from './components/MediaLibrary.vue'
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
