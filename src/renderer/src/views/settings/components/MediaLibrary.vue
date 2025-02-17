<template>
    <n-form ref="formRef">
        <n-card title="媒体库" :bordered="false">
            <n-form-item label="服务地址" path="inputValue">
                <n-input placeholder="http://" clearable>
                    <template #prefix>
                        <n-icon :component="ServerIcon" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item label="用户名" path="inputValue">
                <n-input placeholder="用户名" clearable>
                    <template #prefix>
                        <n-icon :component="UserIcon" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item label="密码" path="inputValue">
                <n-input
                    placeholder="密码"
                    type="password"
                    show-password-on="click"
                    clearable>
                    <template #prefix>
                        <n-icon :component="PasswordIcon" />
                    </template>
                </n-input>
            </n-form-item>
        </n-card>
    </n-form>
</template>
<script setup lang="ts">
import { NForm, NFormItem, NInput, NCard, NIcon } from 'naive-ui'
import {
    RiServerLine as ServerIcon,
    RiUserLine as UserIcon,
    RiLockLine as PasswordIcon
} from '@remixicon/vue'
</script>
<style scoped lang="scss"></style>
