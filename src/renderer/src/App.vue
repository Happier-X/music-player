<template>
    <Layout />
</template>
<script setup lang="ts">
import Layout from './layout/index.vue'
import { Howl } from 'howler'
import { api } from './api/index'
import { onMounted } from 'vue'
// 音频实例
const sound = new Howl({})
onMounted(async () => {
    const res = await api.getRandomSongs()
    console.log(res)
})
</script>
