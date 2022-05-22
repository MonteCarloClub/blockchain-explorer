<template>
    <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'id'">
                <router-link :to="'/block/' + text">{{ text }}</router-link>
            </template>
            <template v-if="column.dataIndex === 'miner'">
                <router-link :to="'/address/' + text">{{ text }}</router-link>
            </template>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { columns } from "@/models/block";
import { PropType } from "vue";

defineProps({
    data: Array as PropType<any[] | null>
})
</script>