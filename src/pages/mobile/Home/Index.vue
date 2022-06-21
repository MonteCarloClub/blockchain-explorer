<template>
    <Title :text="en" :width="width" :height="80"></Title>
    <div class="section">
        <h3>{{ title }}</h3>
    </div>
    <div class="section">
        <router-link to="/blocks">
            <h3 class="card-title">最新区块</h3>
        </router-link>
    </div>
    <Blocks class="bias"></Blocks>
    <div class="section">
        <router-link to="/transactions">
            <h3 class="card-title">最新交易</h3>
        </router-link>
    </div>
    <div class="bias">
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
    margin: var(--margin-lr, 24px);
}

.card-title {
    font-weight: bold;
}

.bias:deep>div {
    padding-left: var(--margin-lr, 24px);
    padding-right: var(--margin-lr, 24px);
}
</style>
