<template>
    <n-modal
        v-model:show="isShow"
        preset="dialog"
        :closable="false"
        :show-icon="false"
        title="媒体库配置"
        negative-text="取消"
        positive-text="保存"
        @positive-click="handlePositiveClick"
        @negative-click="handleNegativeClick"
        @after-leave="clearForm">
        <n-form :model="form">
            <n-form-item label="服务地址" path="serverAddress">
                <n-input
                    placeholder="http://"
                    clearable
                    v-model:value="form.serverAddress">
                    <template #prefix>
                        <n-icon :component="ServerIcon" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item label="用户名" path="username">
                <n-input
                    placeholder="用户名"
                    clearable
                    v-model:value="form.username">
                    <template #prefix>
                        <n-icon :component="UserIcon" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input
                    placeholder="密码"
                    type="password"
                    show-password-on="click"
                    clearable
                    v-model:value="form.password">
                    <template #prefix>
                        <n-icon :component="PasswordIcon" />
                    </template>
                </n-input>
            </n-form-item>
        </n-form>
    </n-modal>
</template>
<script setup lang="ts">
import {
    RiLockLine as PasswordIcon,
    RiServerLine as ServerIcon,
    RiUserLine as UserIcon
} from '@remixicon/vue'
import { NForm, NFormItem, NIcon, NInput, NModal } from 'naive-ui'
import { ref } from 'vue'
import { Conf } from 'electron-conf/renderer'
// 配置
const conf = new Conf()
// 是否展示
const isShow = ref(false)
defineExpose({
    // 展示
    show(item: any) {
        isShow.value = true
        form.value = item
    }
})
const emit = defineEmits(['save'])
// 表单
const form = ref({
    serverAddress: '',
    username: '',
    password: ''
})
/**
 * 清空表单
 */
function clearForm() {
    form.value = {
        serverAddress: '',
        username: '',
        password: ''
    }
}
/**
 * 保存
 */
async function handlePositiveClick() {
    // isShow.value = false
    conf.set(
        'userConfig.mediaLibraryConfig',
        JSON.parse(JSON.stringify(form.value))
    )
    // clearForm()
    emit('save')
}
/**
 * 取消
 */
function handleNegativeClick() {
    // isShow.value = false
    // clearForm()
}
</script>
<style scoped lang="scss"></style>
