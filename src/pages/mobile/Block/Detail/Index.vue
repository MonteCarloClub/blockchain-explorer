<template>
    <h1>区块详情</h1>
    <h2>{{ height }}</h2>
</template>

<script setup>
defineProps({
    height: String
})
</script>

<style scoped>
h1,
h2 {
    text-align: center;
    margin-top: 32px;
}
</style>