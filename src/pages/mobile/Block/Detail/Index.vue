<template>
    <h1>区块详情</h1>
    <a-list bordered>
        <ALItem title="区块高度">{{ height }}</ALItem>
        <ALItem title="哈希">{{ data?.header.hash }}</ALItem>
        <ALItem title="出块时间">{{ data?.header.timestamp }}</ALItem>
        <ALItem title="矿工">{{ data?.header.miner }}</ALItem>
        <ALItem title="奖励">{{ data?.header.blockReward }}</ALItem>
        <ALItem title="交易数量">{{ data?.header.transactionCount }}</ALItem>
        <ALItem title="难度">{{ data?.header.difficulty }}</ALItem>
        <ALItem title="总难度">{{ data?.header.totalDifficulty }}</ALItem>
        <ALItem title="大小">{{ data?.header.size }}</ALItem>
        <ALItem title="状态哈希">{{ data?.header.stateRoot }}</ALItem>
        <ALItem title="父区块哈希">{{ data?.header.parentHash }}</ALItem>
        <ALItem title="Gas 上限">{{ data?.header.gasLimit }}</ALItem>
        <ALItem title="Gas 消耗">{{ data?.header.gasUsed }}</ALItem>
    </a-list>

</template>

<script setup lang="ts">
import { useBlockDetail } from "@/composition/useMock";
import { reactive } from "vue"
import ALItem from "@/components/mobile/AntListItem.vue";

const props = defineProps({
    height: String
})

const params = reactive({
    id: props.height || '123'
})

const { data, error } = useBlockDetail(params)
</script>

<style scoped>
h1,
h2 {
    text-align: center;
    margin-top: 32px;
}
</style>