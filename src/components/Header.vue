<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Nav from "@/components/Nav.vue";
import { ref } from 'vue'

const searchkey = ref<string>('');
</script>

<template>
    <div class="header">
        <div class="logo">
            <Logo></Logo>
        </div>
        <div>
            <div class="group">
                <a-input v-model:value="searchkey" :bordered="false" 
                    placeholder="搜索 Address / Tx hash / Block" />
                <span class="bar"></span>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>

<style scoped>
.header {
    line-height: 64px;
    display: flex;
    margin: 0 var(--margin-lr, 92px);
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

.group {
    line-height: 48px;
    max-width: 360px;
    position: relative;
}

.group input {
    padding-left: 0;
}

.bar {
    width: 100%;
    display: block;
    position: relative;
}

.bar:before {
    left: 0%;
    width: 0;
    bottom: 1px;
    content: '';
    height: 2px;
    position: absolute;
    background: #646464;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus~.bar:before {
    width: 100%;
}
</style>
