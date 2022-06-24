<template>
    <SubTitle title="地址详情" type="h1"></SubTitle>
    <a-list class="container">
        <!-- <ALItem v-for="item in maps" :title="item.label">{{ data?.summary[item.key] }}</ALItem> -->
        <ALItem title="余额">{{ data?.summary["balance"] }}</ALItem>
        <ALItem title="交易数">{{ data?.summary["transactionCount"] }}</ALItem>
        <ALItem title="总支出">{{ data?.summary["totalSent"] }}</ALItem>
        <ALItem title="总收入">{{ data?.summary["totalReceived"] }}</ALItem>
        <ALItem title="总手续费"> {{ data?.summary["totalFees"] }}</ALItem>
        <ALItem title="转账次数">
            <router-link :to="'/address/' + address + '/transaction'">
                {{ data?.summary["tokenTransferCount"] }}
            </router-link>
        </ALItem>
    </a-list>
</template>

<script lang="ts" setup>
import { useAddressDetail } from "@/composition/useMock";
import { reactive } from "vue"
import { maps } from "@/models/address";
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import SubTitle from "@/components/mobile/SubTitle.vue";
import ALItem from "@/components/mobile/AntListItem.vue";

const props = defineProps({
    address: String
})

const map: ListItemMap = {
    title: { index: 'hash' },
    subTitle: { index: 'time' },
    desc: { index: 'value_usd', process: (v) => v + ' USD' },
    subDesc: { index: 'gas_used', process: (v) => v + ' Gas' }
}

const params = reactive({
    id: props.address || '123'
})

const { data, error } = useAddressDetail(params)

</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}
</style>