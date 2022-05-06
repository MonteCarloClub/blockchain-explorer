<script setup lang="ts">
import Title from "./title/Index.vue";
import { ref } from 'vue'

const width = ref(window.innerWidth)
</script>

<template>
    <div class="big-title">
        <Title :width="width" text="KChain"></Title>
    </div>
    <div class="demo-links">
        <router-link to="/transactions">
            <a-button block> 更多交易 </a-button>
        </router-link>
        <router-link to="/blocks">
            <a-button block> 更多区块 </a-button>
        </router-link>
    </div>
</template>

<style scoped>
.big-title {
    text-align: center;
    margin-top: 166px;
}

.demo-links {
    width: 320px;
    margin: auto;
    display: flex;
    gap: 12px;
    flex-direction: column;
}
</style>
