<template>
    <Title title="地址详情"></Title>
    <AddressDesc :data="data?.summary" :maps="maps"></AddressDesc>
    <a-divider />
    <h2>交易列表</h2>
    <TransactionTable :data="data?.transactions"></TransactionTable>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
import TransactionTable from "@/components/tables/TransactionTable.vue";
import AddressDesc from "./AddressDesc.vue";
import { useAddressDetail } from "@/composition/useMock";
import { reactive } from "vue"
import { maps } from "@/models/address";

const props = defineProps({
    address: String
})

// TODO: height may be null
const params = reactive({
    id: props.address || '123'
})

const { data, error } = useAddressDetail(params)
</script>