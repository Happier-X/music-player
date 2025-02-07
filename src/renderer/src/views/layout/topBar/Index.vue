<template>
    <div class="top-bar-container">
        <div>
            <RiFullscreenFill></RiFullscreenFill>
            <RiFullscreenExitFill></RiFullscreenExitFill>
            <RiCloseFill></RiCloseFill>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    RiFullscreenFill,
    RiFullscreenExitFill,
    RiCloseFill
} from '@remixicon/vue'
</script>
<style scoped lang="scss">
.top-bar-container {
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: pink;
    display: flex;
    align-items: center;
    // justify-content: center;
}
</style>
