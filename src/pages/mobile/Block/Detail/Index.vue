<template>
    <SubTitle title="区块详情" type="h1"></SubTitle>
    <a-list class="container">
        <ALItem title="区块高度">{{ height }}</ALItem>
        <ALItem title="哈希">{{ data?.header.hash }}</ALItem>
        <ALItem title="出块时间">{{ data?.header.timestamp }}</ALItem>
        <ALItem title="矿工">
            <router-link :to="'/address/' + data?.header.miner">
                {{ data?.header.miner }}
            </router-link>
        </ALItem>
        <ALItem title="奖励">{{ data?.header.blockReward }}</ALItem>
        <ALItem title="交易数量">
            <router-link :to="'/block/' + height + '/transaction'">
                {{ data?.header.transactionCount }}
            </router-link>
            </ALItem>
        <ALItem title="难度">{{ data?.header.difficulty }}</ALItem>
        <ALItem title="总难度">{{ data?.header.totalDifficulty }}</ALItem>
        <ALItem title="大小">{{ data?.header.size }}</ALItem>
        <ALItem title="状态哈希">{{ data?.header.stateRoot }}</ALItem>
        <ALItem title="父区块哈希">{{ data?.header.parentHash }}</ALItem>
        <ALItem title="Gas 上限">{{ data?.header.gasLimit }}</ALItem>
        <ALItem title="Gas 消耗">{{ data?.header.gasUsed }}</ALItem>
    </a-list>
    <!-- <a-list bordered :data-source="labels">
        <template #renderItem="{ item }">
            <ALItem :title="item.label">{{data?.header[item.key]}}</ALItem>
            <a-list-item>{{ item.label }}</a-list-item>
        </template>
    </a-list> -->
</template>

<script setup lang="ts">
import { useBlockDetail } from "@/composition/useMock";
import { reactive } from "vue"
import ALItem from "@/components/mobile/AntListItem.vue";
import { blkDetail } from "@/models/blockDetail"
import { ListItemMap } from "@/components/mobile/types";
import SubTitle from "@/components/mobile/SubTitle.vue";

const labels = blkDetail;

const props = defineProps({
    height: String
})

const map: ListItemMap = {
    title: { index: 'hash' },
    subTitle: { index: 'time' },
    desc: { index: 'value_usd', process: (v) => v + ' USD' },
    subDesc: { index: 'gas_used', process: (v) => v + ' Gas' }
}

const params = reactive({
    id: props.height || '123'
})

const { data, error } = useBlockDetail(params);
</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}
</style>