<template>
    <div class="w-full h-full flex items-center justify-start">
        <div class="tooltip tooltip-bottom" data-tip="后退">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                :class="{ 'btn-disabled': !canGoBack }"
                @click="handleBack">
                <RiArrowLeftSLine size="18px"></RiArrowLeftSLine>
            </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="前进">
            <button
                class="btn btn-sm btn-circle btn-ghost"
                :class="{ 'btn-disabled': !canGoForward }"
                @click="handleForward">
                <RiArrowRightSLine size="18px"></RiArrowRightSLine>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/vue'
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 路由器对象
const router = useRouter()
// 路由对象
const route = useRoute()
/**
 * 后退
 */
function handleBack() {
    router.back()
}
/**
 * 前进
 */
function handleForward() {
    router.forward()
}
// 是否可以后退
const canGoBack = ref(false)
// 是否可以前进
const canGoForward = ref(false)
// 监听路由变化
watch(route, () => {
    canGoBack.value = window.history.state?.back !== null
    canGoForward.value = window.history.state?.forward !== null
})
</script>
