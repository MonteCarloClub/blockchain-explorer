<template>
    <SubTitle title="交易详情" type="h1"></SubTitle>
    <a-list class="container">
        <ALItem title="哈希">{{ hash }}</ALItem>
        <ALItem title="状态">
            <a-tag v-if="data?.failed" color="default">
                <template #icon>
                    <close-circle-outlined />
                </template>
                失败
            </a-tag>
            <a-tag v-else color="#000">
                <template #icon>
                    <check-circle-outlined />
                </template>
                成功
            </a-tag>
        </ALItem>
        <ALItem title="区块 id">{{ data?.block_id }}</ALItem>
        <ALItem title="时间">{{ data?.time }}</ALItem>
        <ALItem title="发送者">
            <router-link :to="'/address/' + data?.sender">{{ data?.sender }}</router-link>
        </ALItem>
        <ALItem title="接收方">
            <router-link :to="'/address/' + data?.recipient">{{ data?.recipient }}</router-link>
        </ALItem>
        <ALItem title="签名">
            <div>r : <a-tag style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"> {{ data?.r }}</a-tag>
            </div>
            <div style="margin: 6px 0;">s : <a-tag> {{ data?.s }} </a-tag>
            </div>
            <div>v : <a-tag> {{ data?.v }} </a-tag>
            </div>
        </ALItem>
        <ALItem title="金额">{{ data?.value_usd }} (USD)</ALItem>
        <ALItem title="手续费">{{ data?.fee_usd }} (USD)</ALItem>
        <ALItem title="Gas 消耗">{{ data?.gas_used }} (Gas)</ALItem>
        <ALItem title="Gas 价格">{{ data?.gas_price }}</ALItem>
        <ALItem title="Gas 上限">{{ data?.gas_limit }}</ALItem>
    </a-list>
</template>

<script setup lang="ts">
import { useTransactionDetail } from "@/composition/useMock";
import { reactive } from "vue"
import ALItem from "@/components/mobile/AntListItem.vue";
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import SubTitle from "@/components/mobile/SubTitle.vue";

const props = defineProps({
    hash: String
})

const params = reactive({
    id: props.hash || '123'
})

const { data, error } = useTransactionDetail(params);
</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}

.ant-tag{
    margin-right: 0px;
}
</style>