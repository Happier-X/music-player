<template>
    <dialog ref="dialogRef" class="modal">
        <div class="modal-box">
            <fieldset class="fieldset">
                <legend class="fieldset-legend text-lg">媒体库配置</legend>
                <label class="floating-label mt-5">
                    <span>服务地址</span>
                    <input
                        type="text"
                        class="input input-md w-full"
                        placeholder="服务地址"
                        v-model="form.serverAddress" />
                </label>
                <label class="floating-label mt-5">
                    <span>用户名</span>
                    <input
                        type="text"
                        class="input input-md w-full"
                        placeholder="用户名"
                        v-model="form.username" />
                </label>
                <label class="floating-label mt-5">
                    <span>密码</span>
                    <input
                        type="password"
                        class="input input-md w-full"
                        placeholder="密码"
                        v-model="form.password" />
                </label>
                <button class="btn btn-neutral mt-5" @click="handleSave">
                    保存
                </button>
            </fieldset>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button @click="handleClose"></button>
        </form>
    </dialog>
</template>
<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
// 对话框实例
const dialogRef = useTemplateRef('dialogRef')
defineExpose({
    // 展示
    show(item: any) {
        dialogRef.value?.showModal()
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
function handleSave() {
    dialogRef.value?.close()
    emit('save', form.value)
    clearForm()
}
/**
 * 关闭
 */
function handleClose() {
    clearForm()
}
</script>
