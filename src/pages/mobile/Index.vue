<template>
    <div class="mobile-app mobile-variables">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/mobile/Header.vue"
</script>

<style scoped>
/* 在该节点下的 css 变量 */
.mobile-variables {
    --margin-lr: 24px;
}

.mobile-app {
    position: relative;
    background-color: #fafafa;
}

</style>
