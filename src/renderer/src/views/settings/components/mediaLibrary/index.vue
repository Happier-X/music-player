<template>
    <ul class="list">
        <li class="list-row font-bold">媒体库</li>
        <li class="list-row" @click="handleClickMediaLibrary">
            <div>媒体库</div>
            <div>媒体库配置</div>
            <div class="flex items-center gap-2 justify-center">
                <div class="inline-grid *:[grid-area:1/1]">
                    <div
                        class="status animate-ping"
                        :class="
                            isLink ? 'status-success' : 'status-error'
                        "></div>
                    <div
                        class="status"
                        :class="
                            isLink ? 'status-success' : 'status-error'
                        "></div>
                </div>
                {{ isLink ? '已连接' : '未连接' }}
            </div>
        </li>
    </ul>
    <MediaLibraryDialog
        ref="mediaLibraryDialogRef"
        @save="saveMediaLibraryConfig" />
    <div class="toast toast-top toast-center" v-if="isSaveSuccess">
        <div class="alert alert-success">
            <CheckIcon />
            <span>保存成功</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, useTemplateRef, onUnmounted } from 'vue'
import MediaLibraryDialog from './components/MediaLibraryDialog.vue'
import { Conf } from 'electron-conf/renderer'
import { api } from '../../../../api/index'
import { RiCheckboxCircleLine as CheckIcon } from '@remixicon/vue'
// 配置
const conf = new Conf()
// 是否连接
const isLink = ref(false)
// 媒体库对话框实例
const mediaLibraryDialogRef = useTemplateRef('mediaLibraryDialogRef')
// 用户配置
const userConfig: any = ref({})
// 是否保存成功
const isSaveSuccess = ref(false)
/**
 * 点击媒体库
 */
async function handleClickMediaLibrary() {
    await getUserConfig()
    mediaLibraryDialogRef.value?.show(userConfig.value?.mediaLibraryConfig)
}
/**
 * 获取用户配置
 */
async function getUserConfig() {
    userConfig.value = await conf.get('userConfig', {
        mediaLibraryConfig: {
            serverAddress: '',
            username: '',
            password: ''
        }
    })
}
/**
 * 检查是否连接
 */
async function checkIsLink() {
    try {
        const res = await api.ping()
        if (res['subsonic-response']['status'] === 'ok') {
            isLink.value = true
        } else {
            isLink.value = false
        }
    } catch (error) {
        isLink.value = false
    }
}
let timer: any = null
/**
 * 保存媒体库配置
 */
async function saveMediaLibraryConfig(config: any) {
    await conf.set(
        'userConfig.mediaLibraryConfig',
        JSON.parse(JSON.stringify(config))
    )
    isSaveSuccess.value = true
    timer = setTimeout(() => {
        isSaveSuccess.value = false
    }, 800)
    await checkIsLink()
}
// 挂载
onMounted(async () => {
    await getUserConfig()
    await checkIsLink()
})
onUnmounted(() => {
    clearTimeout(timer)
})
</script>
