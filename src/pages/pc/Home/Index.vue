<script setup lang="ts">
import Search from "./search/Index.vue";
import Header from "./header/Index.vue";
import Background from "./background/Index.vue";
import { KCHAIN, KCHAIN_INTRO, KCHAIN_TITLE, SEARCH_PLACE_HOLDER } from "@/common/constants";

const en = KCHAIN;
const title = KCHAIN_TITLE;
const intro = KCHAIN_INTRO;
const placeholder = SEARCH_PLACE_HOLDER;
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
            <Search :placeholder="placeholder"></Search>
        </div>
    </div>
</template>

<style scoped>
.page {
    padding: 0 var(--margin-lr, 92px);
}

.left {
    padding: 140px 0;
    width: 500px;
}

h1 {
    font-size: 64px;
}

h2 {
    font-size: 48px;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}
</style>
