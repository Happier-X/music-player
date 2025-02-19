<template>
    <div class="w-full h-full">
        <ul class="menu bg-base-200 rounded-box w-full h-full">
            <li v-for="(item, index) in menuList" :key="index">
                <RouterLink
                    :to="item.path"
                    :class="{ 'menu-active': activeKey === item.key }">
                    <component :is="item.icon"></component>
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {
    RiAlbumFill as AlbumIcon,
    RiUserFill as ArtistIcon,
    RiMusicFill as MusicIcon,
    RiSettings4Fill as SettingsIcon,
    RiFileList2Fill as SongListIcon
} from '@remixicon/vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// 菜单列表
const menuList = [
    {
        name: '歌曲',
        key: 'songs',
        path: '/songs',
        icon: MusicIcon
    },
    {
        name: '专辑',
        key: 'album',
        path: '/album',
        icon: AlbumIcon
    },
    {
        name: '歌手',
        key: 'artist',
        path: '/artist',
        icon: ArtistIcon
    },
    {
        name: '歌单',
        key: 'songList',
        path: '/songList',
        icon: SongListIcon
    },
    {
        name: '设置',
        key: 'settings',
        path: '/settings',
        icon: SettingsIcon
    }
]
// 当前选中的菜单
const activeKey = ref('songs')
// 路由对象
const route = useRoute()
watch(route, () => {
    activeKey.value = route.path.split('/')[1]
})
</script>
