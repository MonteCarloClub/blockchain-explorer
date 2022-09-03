<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Nav from "@/components/header/Nav.vue";
</script>

<template>
    <div class="header">
        <div class="logo">
            <Logo></Logo>
        </div>
        <div></div>
        <Nav></Nav>
    </div>
</template>

<style scoped>
.header {
    line-height: 64px;
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
    flex-shrink: 0;
}
</style>
