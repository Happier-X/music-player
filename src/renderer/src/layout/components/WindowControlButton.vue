<template>
    <div class="w-full h-full flex items-center justify-end">
        <div
            class="tooltip tooltip-bottom"
            :data-tip="isFullScreen ? '退出全屏' : '全屏'">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                @click="handleSwitchFullScreen">
                <component
                    :is="isFullScreen ? RiFullscreenExitLine : RiFullscreenLine"
                    size="18px" />
            </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="最小化">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                @click="handleMinimize">
                <RiSubtractLine size="18px"></RiSubtractLine>
            </button>
        </div>
        <div
            class="tooltip tooltip-bottom"
            :data-tip="isMaximized ? '还原' : '最大化'">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                @click="handleSwitchScreenSize">
                <component
                    :is="
                        isMaximized
                            ? RiCheckboxMultipleBlankLine
                            : RiCheckboxBlankLine
                    "
                    size="18px" />
            </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="关闭">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                @click="handleClose">
                <RiCloseLine size="18px"></RiCloseLine>
            </button>
        </div>
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
