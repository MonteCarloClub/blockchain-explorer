<script setup lang="ts">
import Title from "./title/Index.vue";
import { KCHAIN, KCHAIN_INTRO, KCHAIN_TITLE } from "@/common/constants";

const en = KCHAIN;
const title = KCHAIN_TITLE;
const intro = KCHAIN_INTRO;

const width = window.innerWidth
</script>

<template>
    <Title :text="en" :width="width" :height="160"></Title>
    <div class="page">
        <h2>{{ title }}</h2>
        <div class="desc"> {{ intro }} </div>
    </div>
</template>

<style scoped>
.page {
    padding: 0 var(--margin-lr, 24px);
}
</style>
