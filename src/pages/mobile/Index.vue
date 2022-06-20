<template>
    <div class="mobile-app mobile-variables">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
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

h1,
h2 {
    text-align: center;
    margin-top: 32px;
    color: aquamarine;
}

/* 给timeline组件增加边距 */
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}
</style>
