<template>
    <div class="grids">
        <div v-for="(tx, i) in data?.slice(0, 5)">
            <CardItem :data="tx" :map="map" @click="toTxDetail(tx.hash)">
                <img :src="txIcon" />
            </CardItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ListItemMap } from "@/components/mobile/types";
import { useTransactionList } from "@/composition/useMock";
import { reactive } from "vue";
import CardItem from "@/components/mobile/CardItem.vue";
import txIcon from "@/assets/transaction.svg";
import router from "@/router";

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
    desc: { index: 'value_usd', process: (v) => '$ ' + v },
    subDesc: { index: 'gas_used', process: (v) => v + ' Gas' }
}

const { data, error } = useTransactionList(params)

function toTxDetail(txid: string) {
    router.push('/transaction/' + txid);
}

</script>
<style scoped>
.grids {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>