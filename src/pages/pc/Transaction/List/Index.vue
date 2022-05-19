<template>
    <Title title="交易列表">
        <a-button type="primary" @click="refresh">刷新</a-button>
    </Title>
    <div>
        <TransactionTable :data="data"></TransactionTable>
    </div>
</template>

<script lang="ts" setup>
import TransactionTable from '@/components/tables/transaction/TransactionsTable.vue';
import Title from '@/components/Title.vue';
import { useTransactionList } from "@/composition/useMock";
import { debounce } from "@/utils/debounce";
import { reactive } from "vue";

const params = reactive({
    q: 'time(2022-05-17 15:49:30..2022-05-18 15:49:30)',
    s: 'internal_value_usd(desc)',
    limit: 10,
    offset: 0
})

const { data, error } = useTransactionList(params)

const refresh = debounce(() => {
    params.offset += params.limit
}, 500)
</script>

<style scoped>

</style>