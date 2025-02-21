<template>
    <div class="w-screen h-screen">
        <div class="w-full h-full" v-if="isNormal">
            <Normal></Normal>
        </div>
        <div class="w-full h-full" v-else>
            <Immersive></Immersive>
        </div>
    </div>
</template>
<script setup lang="ts">
import Normal from './normal/index.vue'
import Immersive from './immersive/index.vue'
import { ref } from 'vue'
import { Howl } from 'howler'
const isNormal = ref(true)
// 音频实例
const sound = new Howl({
    
})
</script>
<style scoped></style>
