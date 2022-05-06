<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from "@/store";

const count = ref(0)

const store = useStore();
const increment = () => {
  count.value ++
  store.commit("increment")
}

</script>

<template>
  <a-button type="primary" @click="increment">click in this page: {{ count }}</a-button>
</template>

<style scoped>

</style>
