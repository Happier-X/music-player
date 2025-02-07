<template>
    <div class="top-bar-container">
        <div class="nav-search-bar">
            <NavBar></NavBar>
            <SearchBar></SearchBar>
        </div>
        <div class="button-group">
            <ButtonGroup></ButtonGroup>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import ButtonGroup from './components/ButtonGroup.vue'
</script>
<style scoped lang="scss">
.top-bar-container {
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
