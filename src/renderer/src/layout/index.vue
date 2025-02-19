<template>
    <div class="w-screen h-screen">
        <div class="w-full h-[calc(100%-75px)] flex">
            <div class="w-[200px] h-full">
                <SideBar></SideBar>
            </div>
            <div class="w-[calc(100%-200px)] h-full">
                <div class="w-full h-[60px]">
                    <TopBar></TopBar>
                </div>
                <div class="w-full h-[calc(100%-60px)] p-[10px]">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
        <div class="w-full h-[75px]">
            <PlayBar></PlayBar>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideBar from './SideBar.vue'
import TopBar from './topBar/index.vue'
import PlayBar from './PlayBar.vue'
</script>
