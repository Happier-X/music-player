<template>
    <div class="w-screen h-screen">
        <div class="flex h-[calc(100%-80px)] w-full">
            <div>
                <SideBar></SideBar>
            </div>
            <div class="w-[calc(100%-224px)] h-full">
                <div>
                    <TopBar></TopBar>
                </div>
                <div>
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
        <div>
            <PlayBar></PlayBar>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideBar from './SideBar.vue'
import TopBar from './TopBar.vue'
import PlayBar from './PlayBar.vue'
</script>
<style scoped></style>
