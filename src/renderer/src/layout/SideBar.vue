<template>
    <div class="side-bar-container">
        <div class="logo">音乐播放器</div>
        <n-menu v-model:value="activeKey" :options="menuOptions" />
    </div>
</template>
<script setup lang="ts">
import {
    RiAlbumFill as AlbumIcon,
    RiFileList2Fill as SongListIcon,
    RiMusicFill as MusicIcon,
    RiSettings4Fill as SettingsIcon,
    RiUserFill as ArtistIcon
} from '@remixicon/vue'
import type { MenuOption } from 'naive-ui'
import { NIcon, NMenu } from 'naive-ui'
import type { Component } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { h, ref, watch } from 'vue'
/**
 * 渲染图标
 */
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
// 菜单配置
const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/songs'
                    }
                },
                {
                    default: () => '歌曲'
                }
            ),
        key: 'songs',
        icon: renderIcon(MusicIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/album'
                    }
                },
                {
                    default: () => '专辑'
                }
            ),
        key: 'album',
        icon: renderIcon(AlbumIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/artist'
                    }
                },
                {
                    default: () => '歌手'
                }
            ),
        key: 'artist',
        icon: renderIcon(ArtistIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/songList'
                    }
                },
                {
                    default: () => '歌单'
                }
            ),
        key: 'songList',
        icon: renderIcon(SongListIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/settings'
                    }
                },
                {
                    default: () => '设置'
                }
            ),
        key: 'settings',
        icon: renderIcon(SettingsIcon)
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
<style lang="scss" scoped>
.side-bar-container {
    width: 100%;
    height: 100%;
    padding: 10px;
    .logo {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
    }
}
</style>
