<template>
    <n-list hoverable clickable :show-divider="false">
        <template #header>
            <div class="list-title">媒体库</div>
        </template>
        <n-list-item @click="handleClickMediaLibrary">
            <template #prefix>
                <div class="list-item-prefix">媒体库</div>
            </template>
            媒体库配置
            <template #suffix>
                <n-tag
                    round
                    :bordered="false"
                    :type="isLink ? 'success' : 'error'">
                    {{ isLink ? '已连接' : '未连接' }}
                    <template #icon>
                        <n-icon :component="isLink ? LinkIcon : UnlinkIcon" />
                    </template>
                </n-tag>
            </template>
        </n-list-item>
    </n-list>
    <media-library-dialog ref="mediaLibraryDialogRef" @save="checkIsLink" />
</template>
<script setup lang="ts">
import { NList, NListItem, NTag, NIcon } from 'naive-ui'
import { RiLink as LinkIcon, RiLinkUnlink as UnlinkIcon } from '@remixicon/vue'
import { onMounted, ref, useTemplateRef } from 'vue'
import MediaLibraryDialog from './components/mediaLibraryDialog.vue'
import { Conf } from 'electron-conf/renderer'
// 配置
const conf = new Conf()
// 是否连接
const isLink = ref(false)
// 媒体库对话框实例
const mediaLibraryDialogRef = useTemplateRef('mediaLibraryDialogRef')
// 用户配置
const userConfig: any = ref({})
// 点击媒体库
function handleClickMediaLibrary() {
    mediaLibraryDialogRef.value?.show(userConfig.value?.mediaLibraryConfig)
}
// 获取用户配置
async function getUserConfig() {
    userConfig.value = await conf.get('userConfig', {
        mediaLibraryConfig: {
            serverAddress: '',
            username: '',
            password: ''
        }
    })
}
// 检查是否连接
async function checkIsLink() {
    isLink.value = true
}
// 挂载
onMounted(async () => {
    await getUserConfig()
    await checkIsLink()
})
</script>
<style scoped lang="scss">
.list-title {
    font-size: 16px;
    font-weight: 600;
    text-wrap: nowrap;
}
.list-item-prefix {
    font-size: 14px;
    font-weight: 600;
    text-wrap: nowrap;
}
</style>
