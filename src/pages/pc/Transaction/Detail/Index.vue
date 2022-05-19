<template>
    <Title title="交易详情"></Title>
    <div class="info">
        <Item title="哈希">{{ hash }}</Item>
        <Item title="状态">
            <a-tag v-if="data?.failed" color="default"> 失败 </a-tag>
            <a-tag v-else color="#000"> 成功 </a-tag>
        </Item>
        <Item title="区块 id">{{ data?.block_id }}</Item>
        <Item title="时间">{{ data?.time }}</Item>
        <Item title="发送者">
            <router-link :to="'/address/' + data?.sender">{{ data?.sender }}</router-link>
        </Item>
        <Item title="接收方">
            <router-link :to="'/address/' + data?.recipient">{{ data?.recipient }}</router-link>
        </Item>
        <Item title="签名">
            <div>r : <a-tag> {{data?.r}} </a-tag></div>
            <div style="margin: 6px 0;">s : <a-tag> {{data?.s}} </a-tag></div>
            <div>v : <a-tag> {{data?.v}} </a-tag></div>
        </Item>
        <Item title="金额">{{ data?.value_usd }} (USD)</Item>
        <Item title="手续费">{{ data?.fee_usd }} (USD)</Item>
        <Item title="Gas 消耗">{{ data?.gas_used }} (Gas)</Item>
        <Item title="Gas 价格">{{ data?.gas_price }}</Item>
        <Item title="Gas 上限">{{ data?.gas_limit }}</Item>
        <Item title="Input Data">
            <div style="border-left: lightgray 2px solid; padding-left: 6px; color: gray;">
                {{ data?.input_hex }}
            </div> 
        </Item>
    </div>
</template>

<script setup lang="ts">
import { useTransactionDetail } from "@/composition/useMock";
import { reactive } from "vue";
import Title from '@/components/Title.vue';
import Item from "@/components/Item.vue"

const props = defineProps({
    hash: String
})

// TODO: hash may be null
const params = reactive({
    id: props.hash || '123'
})

const { data, error } = useTransactionDetail(params)
</script>

<style scoped>
.info {
    margin-bottom: 32px;
}
</style>