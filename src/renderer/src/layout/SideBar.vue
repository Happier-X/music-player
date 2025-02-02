<template>
    <div class="w-56 h-full">
        <ul class="menu menu-xl bg-base-200 rounded-box w-56 h-full gap-2">
            <li class="menu-title text-xl">音乐播放器</li>
            <li v-for="(item, index) in menuList" :key="index">
                <RouterLink
                    :to="item.path"
                    :class="route.path === item.path ? 'menu-active' : ''">
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
// 菜单列表
const menuList = [
    {
        name: '歌曲',
        path: '/songs'
    },
    {
        name: '专辑',
        path: '/album'
    },
    {
        name: '艺术家',
        path: '/artist'
    },
    {
        name: '歌单',
        path: '/songList'
    },
    {
        name: '设置',
        path: '/settings'
    }
]
</script>
