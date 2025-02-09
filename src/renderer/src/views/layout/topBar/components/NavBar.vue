<template>
    <div class="nav-bar-container">
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    :disabled="!canGoBack"
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleBack">
                    <n-icon size="25" color="#000000">
                        <RiArrowLeftSLine></RiArrowLeftSLine>
                    </n-icon>
                </n-button>
            </template>
            后退
        </n-tooltip>
        <n-tooltip :show-arrow="false" trigger="hover" :delay="800">
            <template #trigger>
                <n-button
                    :disabled="!canGoForward"
                    circle
                    color="transparent"
                    class="icon-button"
                    @click="handleForward">
                    <n-icon size="25" color="#000000">
                        <RiArrowRightSLine></RiArrowRightSLine>
                    </n-icon>
                </n-button>
            </template>
            前进
        </n-tooltip>
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
<style scoped lang="scss">
.nav-bar-container {
    .icon-button {
        &:hover {
            color: black;
            background-color: #e7e8ea;
        }
    }
}
</style>
