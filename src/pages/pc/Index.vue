<template>
    <div class="pc-app pc-variables">
        <Header v-if="$route.path !== '/'"></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* 在该节点下的 css 变量 */
.pc-variables {
    --margin-lr: 92px;
}

.pc-app {
    min-width: 1280px;
    max-width: 1660px;
    position: relative;
}
</style>
