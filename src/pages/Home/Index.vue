<script setup lang="ts">
// import Title from "./title/Index.vue";
import Search from "./search/Index.vue";
import Header from "./header/Index.vue";
import Background from "./background/Index.vue";

const en = "KChain";
const title = "自主可控底层链";
const intro = "\
    你确实需要服药，但我的悲伤，突如其来的焦虑，实际上是智慧的第二来源——甚至是第一来源。\
    天一下雨我就变得倦怠无力，随着与点开始敲击窗户，奏出魏尔伦笔下秋天的《哽咽》，\
    我就更容易陷入冥想";
</script>

<template>
    <div class="background">
        <Background :cols="5"></Background>
    </div>
    <div class="page">
        <Header></Header>
        <div class="left">
            <h1>{{ en }}</h1>
            <h2>{{ title }}</h2>
            <div class="desc"> {{ intro }} </div>
            <Search placeholder="搜索 Address / Tx hash / Block"></Search>
        </div>
    </div>
</template>

<style scoped>
.page {
    padding: 0 92px;
}

.left {
    padding-top: 140px;
    width: 500px;
}

h1 {
    font-size: 64px;
}

h2 {
    font-size: 48px;
}

.demo-links {
    width: 320px;
    margin: auto;
    display: flex;
    gap: 12px;
    flex-direction: column;
}

.background {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
