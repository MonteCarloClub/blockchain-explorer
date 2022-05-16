<template>
  <Header v-if="$route.path !== '/'"></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
/* 引入全局 css 变量 */
@import '@/styles/variables.css';

#app {
  min-width: 1280px;
  max-width: 1660px;
  position: relative;
}
</style>
