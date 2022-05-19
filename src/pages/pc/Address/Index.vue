<template>
    <Title title="地址详情"></Title>
    <div>
        <a-descriptions :title="address" bordered>
            <a-descriptions-item label="余额">{{ data?.summary.balance }}</a-descriptions-item>
            <a-descriptions-item label="交易数">{{ data?.summary.transactionCount }}</a-descriptions-item>
            <a-descriptions-item label="总支出">{{ data?.summary.totalSent }}</a-descriptions-item>
            <a-descriptions-item label="总收入"> {{ data?.summary.totalReceived }}</a-descriptions-item>
            <a-descriptions-item label="总手续费">{{ data?.summary.totalFees }}</a-descriptions-item>
            <a-descriptions-item label="转账次数">{{data?.summary.tokenTransferCount}}</a-descriptions-item>
        </a-descriptions>
    </div>
    <a-divider />
    <h2>交易列表</h2>
    <TransactionsTable :data="data?.transactions"></TransactionsTable>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
import TransactionsTable from "@/components/tables/transaction/TransactionsTable.vue";
import { useAddressDetail } from "@/composition/useMock";
import { reactive } from "vue"

const props = defineProps({
    address: String
})

// TODO: height may be null
const params = reactive({
    id: props.address || '123'
})

const { data, error } = useAddressDetail(params)
</script>

<style scoped>
</style>