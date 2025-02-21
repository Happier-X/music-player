<template>
    <div
        class="w-full h-full pl-[15px] pr-[15px] flex items-center justify-between">
        <div class="w-full h-full">
            <NavBar></NavBar>
        </div>
        <div class="w-full h-full">
            <WindowControlButton></WindowControlButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import WindowControlButton from './components/WindowControlButton.vue'
</script>
