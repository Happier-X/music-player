<template>
    <div>
        <ul class="menu menu-xl bg-base-200 rounded-box w-56 h-full gap-2">
            <li class="menu-title text-xl">音乐播放器</li>
            <li v-for="(item, index) in menuList" :key="index">
                <RouterLink
                    :to="item.path"
                    :class="route.path === item.path ? 'menu-active' : ''">
                    <component :is="item.svg"></component>
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
    RiAlbumFill,
    RiFileList2Fill,
    RiMusicFill,
    RiSettings4Fill,
    RiUserFill
} from '@remixicon/vue'
const route = useRoute()
// 菜单列表
const menuList = [
    {
        name: '歌曲',
        path: '/songs',
        svg: RiMusicFill
    },
    {
        name: '专辑',
        path: '/album',
        svg: RiAlbumFill
    },
    {
        name: '艺术家',
        path: '/artist',
        svg: RiUserFill
    },
    {
        name: '歌单',
        path: '/songList',
        svg: RiFileList2Fill
    },
    {
        name: '设置',
        path: '/settings',
        svg: RiSettings4Fill
    }
]
</script>
