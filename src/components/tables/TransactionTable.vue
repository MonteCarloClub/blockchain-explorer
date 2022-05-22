<template>
    <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'hash'">
                <router-link :to="'/transaction/' + text">{{ text }}</router-link>
            </template>
            <template v-if="column.dataIndex === 'block_id'">
                <router-link :to="'/block/' + text">{{ text }}</router-link>
            </template>
            <template v-if="column.dataIndex === 'to_icon'">
                <a-space>
                    <arrow-right-outlined />
                </a-space>
            </template>
            <template v-if="column.dataIndex === 'sender' || column.dataIndex === 'recipient'">
                <router-link :to="'/address/' + text">{{ text }}</router-link>
            </template>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue';
import { columns } from "@/models/transaction";
import { PropType } from "vue";

defineProps({
    data: Array as PropType<any[] | null>
})
</script>