<template>
    <ListItem padding v-for="(tx, i) in data?.slice(0, 5)" :data="tx" :map="map"></ListItem>
</template>

<script setup lang="ts">
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import { useTransactionList } from "@/composition/useMock";
import { reactive } from "vue";

// TODO: 抽象到 models 中
const params = reactive({
    q: 'time(2022-05-17 15:49:30..2022-05-18 15:49:30)',
    s: 'internal_value_usd(desc)',
    limit: 10,
    offset: 0
})

// TODO: 抽象到 models 中
const map: ListItemMap = {
    title: { index: 'hash' },
    subTitle: { index: 'time' },
    desc: { index: 'value_usd', process: (v) => v + ' USD' },
    subDesc: { index: 'gas_used', process: (v) => v + ' Gas' }
}

const { data, error } = useTransactionList(params)
</script>