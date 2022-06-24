<template>
    <SubTitle title="交易列表" type="h1"></SubTitle>
    <div class="container">
        <a-timeline>
            <a-timeline-item v-for="(tx, i) in data?.transactions">
                <ListItem :data="tx" :map="map"></ListItem>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>

<script setup lang="ts">
import { useBlockDetail } from "@/composition/useMock";
import { reactive } from "vue"
import { ListItemMap } from "@/components/mobile/types";
import ListItem from "@/components/mobile/ListItem.vue";
import SubTitle from "@/components/mobile/SubTitle.vue";

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