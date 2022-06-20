<template>
    <a-descriptions bordered>
        <a-descriptions-item v-if="data" v-for="item in maps" :label="item.label" :labelStyle="labelStyle">
            {{ data[item.key] }}
        </a-descriptions-item>
    </a-descriptions>
</template>
<script lang="ts" setup>
import { maps } from "@/models/address";
import { PropType } from "vue";
import { AddressDescMap } from "./types";

defineProps({
    data: {
        type: Object as PropType<Object | any>
    },
    maps: {
        type: Object as PropType<AddressDescMap>,
        required: true,
    },
});

const labelStyle = {
    "white-space": "nowrap" /* 取消表头换行 */
}
</script>
<style scoped>
</style>