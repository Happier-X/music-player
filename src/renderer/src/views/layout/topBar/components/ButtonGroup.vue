<template>
    <div class="button-group-container">
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleSwitchFullScreen">
                    <n-icon size="20" color="#000000">
                        <component
                            :is="
                                isFullScreen
                                    ? RiFullscreenExitLine
                                    : RiFullscreenLine
                            " />
                    </n-icon>
                </n-button>
            </template>
            {{ isFullScreen ? '退出全屏' : '全屏' }}
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleMinimize">
                    <n-icon size="25" color="#000000">
                        <RiSubtractLine></RiSubtractLine>
                    </n-icon>
                </n-button>
            </template>
            最小化
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleSwitchScreenSize">
                    <n-icon size="20" color="#000000">
                        <component
                            :is="
                                isMaximized
                                    ? RiCheckboxMultipleBlankLine
                                    : RiCheckboxBlankLine
                            " />
                    </n-icon>
                </n-button>
            </template>
            {{ isMaximized ? '最小化' : '最大化' }}
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleClose">
                    <n-icon size="25" color="#000000">
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
import { onMounted, ref } from 'vue'
// 是否全屏
const isFullScreen = ref(false)
// 是否最大化
const isMaximized = ref(false)
onMounted(async () => {
    isMaximized.value = await window.api.isMaximized()
    isFullScreen.value = await window.api.isFullScreen()
})
/**
 * 切换全屏
 */
function handleSwitchFullScreen() {
    if (isFullScreen.value) {
        window.api.exitFullScreen()
    } else {
        window.api.handleFullScreen()
    }
    isFullScreen.value = !isFullScreen.value
}
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
    if (isMaximized.value) {
        window.api.unmaximize()
    } else {
        window.api.maximize()
    }
    isMaximized.value = !isMaximized.value
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .icon-button {
        &:hover {
            color: black;
            background-color: #e7e8ea;
        }
    }
}
</style>
