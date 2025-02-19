<template>
    <div class="w-full h-full p-[15px] flex items-center justify-between">
        <div class="w-full h-full">
            <NavBar></NavBar>
        </div>
        <div class="w-full h-full">
            <ButtonGroup></ButtonGroup>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ButtonGroup from './components/ButtonGroup.vue'
</script>
