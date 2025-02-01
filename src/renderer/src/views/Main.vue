<template>
    <div class="w-full h-[calc(100vh-80px)] bg-amber-400">
        <SideBar></SideBar>
        <div>
            <TopBar></TopBar>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideBar from './SideBar.vue'
import TopBar from './TopBar.vue'
</script>
<style scoped></style>
