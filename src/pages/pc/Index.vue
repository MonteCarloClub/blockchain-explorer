<template>
    <div class="pc-app pc-variables">
        <Header v-if="$route.path !== '/'"></Header>
        <div :class="{ body: $route.path !== '/' }" class="global-pc-container">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* 在该节点下的 css 变量 */
.pc-variables {
    --margin-lr: 92px;
}

.pc-app {
    min-width: 1280px;
    position: relative;
}

.body {
    padding: 0 var(--margin-lr, 92px);
}
</style>
