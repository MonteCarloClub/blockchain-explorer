<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import { ref } from 'vue'

const searchkey = ref<string>('');
</script>

<template>
    <div class="header">
        <div class="logo">
            <Logo></Logo>
        </div>
        <div class="search-box">
            <a-input v-model:value="searchkey" :bordered="false" placeholder="搜索 Address / Tx hash / Block" />
        </div>
        <div class="nav">
            <router-link to="/">主页</router-link>
            <router-link to="/transactions">交易</router-link>
            <router-link to="/blocks">区块</router-link>
        </div>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
    height: 66px;
    display: flex;
    align-items: center;
}

.header> :nth-child(1) {
    flex-basis: 200px;
}

.header> :nth-child(2) {
    flex: 1;
}

.header> :nth-child(3) {
    flex-basis: 200px;
}

.nav>a {
    padding: 0 20px;
}
</style>
