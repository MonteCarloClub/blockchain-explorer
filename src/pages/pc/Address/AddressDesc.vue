<template>
    <a-descriptions :title="title" bordered>
        <a-descriptions-item v-for="item in maps" :label="item.label">
            {{ data[item.key] }}
        </a-descriptions-item>
    </a-descriptions>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { AddressDescMap } from "./types";

defineProps({
    title: String,
    data: {
        type: Object as PropType<Object | any>,
    },
    maps: {
        type: Object as PropType<AddressDescMap>,
        required: true
    },
})
</script>

<style scoped>
</style>