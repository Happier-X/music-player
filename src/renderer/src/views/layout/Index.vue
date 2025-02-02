<template>
    <div class="w-screen h-screen">
        <div class="flex h-[calc(100vh-80px)] w-full">
            <SideBar></SideBar>
            <div class="w-[calc(100%-224px)] h-full">
                <TopBar></TopBar>
                <RouterView></RouterView>
            </div>
        </div>
        <PlayBar></PlayBar>
    </div>
</template>
<script setup lang="ts">
import SideBar from './SideBar.vue'
import TopBar from './TopBar.vue'
import PlayBar from './PlayBar.vue'
</script>
<style scoped></style>
