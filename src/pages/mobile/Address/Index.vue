<template>
    <SubTitle title="地址详情" type="h1"></SubTitle>
    <AddDesc v-if="data" :maps="maps" :data="data.summary"></AddDesc>
    <SubTitle title="交易列表"></SubTitle>
    <div class="container">
        <a-timeline>
            <a-timeline-item v-for="(tx, i) in data?.transactions">
                <ListItem :data="tx" :map="map"></ListItem>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>

<script lang="ts" setup>
import { useAddressDetail } from "@/composition/useMock";
import { reactive } from "vue"
import { maps } from "@/models/address";
import AddDesc from "./AddDesc.vue";
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import SubTitle from "@/components/mobile/SubTitle.vue";

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