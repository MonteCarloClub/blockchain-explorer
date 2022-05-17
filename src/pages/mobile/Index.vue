<template>
    <div class="mobile-app">
        <Header v-if="$route.path !== '/'"></Header>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";

</script>

<style>
/* 引入全局 css 变量 */
@import '@/styles/variables.css';

.mobile-app {
    position: relative;
}
</style>
