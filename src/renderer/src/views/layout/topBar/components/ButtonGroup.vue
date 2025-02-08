<template>
    <div class="button-group-container">
        <n-tooltip :show-arrow="false" trigger="hover" :delay="500">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleSwitchFullScreen">
                    <n-icon size="20" color="#000000">
                        <RiFullscreenLine></RiFullscreenLine>
                    </n-icon>
                </n-button>
            </template>
            全屏
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="500">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleMinimize">
                    <n-icon size="20" color="#000000">
                        <RiSubtractLine></RiSubtractLine>
                    </n-icon>
                </n-button>
            </template>
            最小化
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="500">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleSwitchScreenSize">
                    <n-icon size="20" color="#000000">
                        <RiCheckboxBlankLine></RiCheckboxBlankLine>
                    </n-icon>
                </n-button>
            </template>
            最大化
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="500">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleClose">
                    <n-icon size="20" color="#000000">
                        <RiCloseLine></RiCloseLine>
                    </n-icon>
                </n-button>
            </template>
            关闭
        </n-tooltip>
    </div>
</template>
<script setup lang="ts">
import {
    RiFullscreenLine,
    RiFullscreenExitLine,
    RiSubtractLine,
    RiCheckboxBlankLine,
    RiCheckboxMultipleBlankLine,
    RiCloseLine
} from '@remixicon/vue'
/**
 * 切换全屏
 */
function handleSwitchFullScreen() {}
/**
 * 最小化
 */
function handleMinimize() {
    window.api.minimizeWindow()
}
/**
 * 切换屏幕大小
 */
function handleSwitchScreenSize() {
    alert('333')
}
/**
 * 关闭
 */
function handleClose() {
    window.api.closeWindow()
}
</script>
<style scoped lang="scss">
.button-group-container {
    width: 100%;
    height: 100%;
    .icon-button {
        &:hover {
            color: black;
            background-color: #e7e8ea;
        }
    }
}
</style>
