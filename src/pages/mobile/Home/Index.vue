<template>
    <Title :text="en" :width="width" :height="80"></Title>
    <div class="section" style="margin-bottom: 20px;">
        <h3>{{ title }}</h3>
    </div>
    <div class="section">
        <router-link to="/blocks">
            <h3 class="card-title">最新区块</h3>
        </router-link>
        <Blocks></Blocks>
    </div>
    <div class="section">
        <h3 class="card-title">最新交易</h3>
        <Txs></Txs>
    </div>
</template>

<script setup lang="ts">
import Title from "./title/Index.vue";
import Blocks from "./blocks/Index.vue";
import Txs from "./txs/Index.vue";
import { KCHAIN, KCHAIN_TITLE } from "@/common/constants";

const en = KCHAIN;
const title = KCHAIN_TITLE;
const width = window.innerWidth;
</script>


<style scoped>
.section {
    margin: 0 var(--margin-lr, 24px);
}

.card-title {
    font-weight: bold;
    margin-bottom: 24px;
}
</style>
