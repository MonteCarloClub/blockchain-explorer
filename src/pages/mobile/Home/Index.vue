<script setup lang="ts">
import Title from "./title/Index.vue";

const en = "KChain";
const title = "自主可控底层链";
const intro = "\
    你确实需要服药，但我的悲伤，突如其来的焦虑，实际上是智慧的第二来源——甚至是第一来源。\
    天一下雨我就变得倦怠无力，随着与点开始敲击窗户，奏出魏尔伦笔下秋天的《哽咽》，\
    我就更容易陷入冥想";

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
