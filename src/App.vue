<template>
  <Header v-if="$route.path !== '/'"></Header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style>

</style>
