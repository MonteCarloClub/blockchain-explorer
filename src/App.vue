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

</style>
