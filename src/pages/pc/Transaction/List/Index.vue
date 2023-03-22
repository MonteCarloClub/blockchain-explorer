<template>
    <Title title="交易列表" />
    <TransactionTable :data="transactions"></TransactionTable>
</template>

<script lang="ts" setup>
import TransactionTable from '@/components/tables/TransactionTable.vue';
import Title from '@/components/Title.vue';
import { getTxList } from "@/utils/storage";
import { ref } from "vue";
import { detail } from "@/api/transaction";
import { parallelWithLimit } from "@/utils/promises";

const transactions = ref<API.TransactionDetail[]>(getTxList());
/**获取交易最新的状态 */
const tasks = transactions.value.map((tx) =>
  detail({ tx_hash: tx.tx_hash || "" })
);
parallelWithLimit(tasks, 3, (index, res) => {
  transactions.value[index] = res.data.tx;
});
</script>

<style scoped>

</style>