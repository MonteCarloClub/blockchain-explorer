<template>
    <div class="mobile-app mobile-variables">
        <Header v-if="$route.path !== '/'"></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
/* 在该节点下的 css 变量 */
.mobile-variables {
    --margin-lr: 24px;
}

.mobile-app {
    position: relative;
}
</style>
