<template>
    <a-timeline>
        <a-timeline-item v-for="(block, i) in data?.slice(0, 5)">
            <ListItem :data="block" :map="map"></ListItem>
        </a-timeline-item>
    </a-timeline>
</template>

<script setup lang="ts">
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import { useBlockList } from "@/composition/useMock";
import { reactive } from "vue";

// TODO: 抽象出来
const params = reactive({
    s: 'id(desc)',
    limit: 10,
    offset: 0
})


// TODO: 抽象到 models 中
const map: ListItemMap = {
    title: { index: 'id' },
    subTitle: { index: 'time' },
    desc: { index: 'size', process: (v) => v + ' bytes' },
    subDesc: { index: 'transaction_count', process: (v) => v + ' 笔交易' }
}

const { data, error } = useBlockList(params)
</script>