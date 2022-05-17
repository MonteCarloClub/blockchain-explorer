<template>
    <h1>交易详情</h1>
    <h2>{{ hash }}</h2>
</template>

<script setup>
defineProps({
    hash: String
})
</script>

<style>
h1,
h2 {
    text-align: center;
    margin-top: 32px;
}
</style>