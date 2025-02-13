<template>
    <div class="layout-container">
        <div class="side-main-container">
            <div class="side-container">
                <SideBar></SideBar>
            </div>
            <div class="main-container">
                <div class="top-container">
                    <TopBar></TopBar>
                </div>
                <div class="content-container">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
        <div class="play-bar-container">
            <PlayBar></PlayBar>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideBar from './SideBar.vue'
import TopBar from './topBar/Index.vue'
import PlayBar from './PlayBar.vue'
</script>
<style scoped lang="scss">
.layout-container {
    width: 100vw;
    height: 100vh;
    .side-main-container {
        width: 100%;
        height: calc(100% - 75px);
        background-color: #f7f9fc;
        display: flex;
        .side-container {
            width: 200px;
            height: 100%;
        }
        .main-container {
            width: calc(100% - 200px);
            height: 100%;
            .top-container {
                width: 100%;
                height: 60px;
            }
            .content-container {
                width: 100%;
                height: calc(100% - 60px);
                padding: 10px;
            }
        }
    }
    .play-bar-container {
        width: 100%;
        height: 75px;
        background-color: #fafafa;
    }
}
</style>
