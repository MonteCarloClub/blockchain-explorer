<template>
    <h1 v-if="type === 'h1'">{{ title }}</h1>
    <h2 v-else>{{ title }}</h2>
</template>
<script lang="ts" setup>
import { htmlLabel } from "./types"
import { PropType } from "vue"
defineProps({
    title: String,
    type: {
        type: String as PropType<htmlLabel>,
        default: 'h2'
    },
})
</script>
<style scoped>
h1,
h2 {
    text-align: center;
    margin-top: 32px;
}
</style>