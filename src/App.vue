<template>
  <PC v-if="isPC"></PC>
  <Mobile v-else></Mobile>
</template>

<script setup lang="ts">
import PC from "@/pages/pc/Index.vue";
import Mobile from "@/pages/mobile/Index.vue";
import { initRoutes } from "@/router"

const isPC = window.innerWidth >= 720;
initRoutes(isPC)
</script>

<style>
/* 全局样式 */
.app {
  max-width: 1240px;
  position: relative;
  margin: auto;
}

.global-pc-container {
  overflow: hidden;
  max-width: 1660px;
  margin: auto;
  position: relative;
}
</style>