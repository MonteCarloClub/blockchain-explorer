<template>
    <Title title="区块详情"></Title>
    <div>
        <Item title="区块高度">{{ height }}</Item>
        <Item title="哈希">{{ data?.header.hash }}</Item>
        <Item title="出块时间">{{ data?.header.timestamp }}</Item>
        <Item title="矿工">
            <router-link :to="'/address/' + data?.header.miner">
                {{ data?.header.miner }}
            </router-link>
        </Item>
        <Item title="奖励">{{ data?.header.blockReward }}</Item>
        <Item title="交易数量">{{ data?.header.transactionCount }}</Item>
        <Item title="难度">{{ data?.header.difficulty }}</Item>
        <Item title="总难度">{{ data?.header.totalDifficulty }}</Item>
        <Item title="大小">{{ data?.header.size }}</Item>
        <Item title="状态哈希">{{ data?.header.stateRoot }}</Item>
        <Item title="父区块哈希">{{ data?.header.parentHash }}</Item>
        <Item title="Gas 上限">{{ data?.header.gasLimit }}</Item>
        <Item title="Gas 消耗">{{ data?.header.gasUsed }}</Item>
    </div>
    <!-- <a-divider />
    <h2>交易列表</h2>
    <a-timeline>
        <a-timeline-item v-for="(tx, i) in data?.transactions">
            <TxsTimelineItem :tx="tx"></TxsTimelineItem>
        </a-timeline-item>
    </a-timeline> -->
</template>

<script setup lang="ts">
import TxsTimelineItem from "./TxsTimelineItem.vue";
import { useBlockDetail } from "@/composition/useMock";
import { reactive } from "vue";
import Item from "@/components/Item.vue";
import Title from '@/components/Title.vue';

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

const { data, error } = useBlockDetail(params)
</script>

<style scoped>
h2 {
    margin-bottom: 24px;
}
</style>