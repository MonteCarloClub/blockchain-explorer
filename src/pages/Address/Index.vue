<template>
    <h1>地址详情</h1>
    <h2>{{ address }}</h2>
</template>

<script setup>
defineProps({
    address: String
})
</script>

<style>
h1,
h2 {
    text-align: center;
    margin-top: 32px;
}
</style>