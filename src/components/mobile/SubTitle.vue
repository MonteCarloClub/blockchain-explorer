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
    padding: 32px var(--margin-lr, 24px) 16px var(--margin-lr, 24px);
    margin-bottom: 0px;
}
</style>