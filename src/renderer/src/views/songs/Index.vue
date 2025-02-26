<template>
    <div class="w-full h-full">
        <div class="w-full h-[200px]">
            <div class="card card-side bg-base-100 p-4">
                <figure>
                    <div class="avatar flex items-center justify-center">
                        <div class="w-40 h-40 rounded">
                            <img :src="songList[0]?.coverImg" />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">歌曲</h2>
                    <p>共{{ total }}首</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-neutral">播放全部</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[calc(100%-200px)]">
            <SongList :list="songList" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { api } from '@renderer/api'
import SongList from '@renderer/components/SongList.vue'
import { onMounted, ref } from 'vue'
// 歌曲列表
const songList = ref<any[]>([])
// 当前页
const currentPage = ref(0)
// 每页歌曲数量
const pageSize = ref(100)
// 歌曲总数
const total = ref(0)
/**
 * 获取歌曲列表
 */
async function getSongList(current, size) {
    const res = await api.search({
        query: '',
        songCount: size,
        songOffset: current * size
    })
    res['subsonic-response']['searchResult2']['song'].forEach(async (item) => {
        item.coverImg = await api.getCoverById({ id: item.id })
    })
    songList.value.push(...res['subsonic-response']['searchResult2']['song'])
    if (res['subsonic-response']['searchResult2']['song'].length === size) {
        current++
        getSongList(current, size)
    } else {
        total.value = songList.value.length
    }
}
onMounted(async () => {
    await getSongList(currentPage.value, pageSize.value)
})
</script>
