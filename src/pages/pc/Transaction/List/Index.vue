<template>
    <Title title="交易列表" />
    <TransactionTable :data="transactions"></TransactionTable>
</template>

<script lang="ts" setup>
import TransactionTable from '@/components/tables/TransactionTable.vue';
import Title from '@/components/Title.vue';
import { getTxList } from "@/utils/storage";
import { reactive } from "vue";

const transactions = reactive<API.TransactionDetail[]>(getTxList());
</script>

<style scoped>

</style>