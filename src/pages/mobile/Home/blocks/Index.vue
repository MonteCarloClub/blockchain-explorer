<template>
    <div class="horizon-scroll">
        <div class="grids">
            <div  v-for="(block, i) in data" @click="toBlockDetail(block.id)">
                <GridItem :data="block" :map="map">
                    <img :src="cubeIcon" />
                </GridItem>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GridItem from "@/components/mobile/GridItem.vue";
import { GridItemMap } from "@/components/mobile/types";
import { useBlockList } from "@/composition/useMock";
import cubeIcon from "@/assets/cube.svg";
import { reactive } from "vue";
import router from "@/router";

const params = reactive({
    s: 'id(desc)',
    limit: 10,
    offset: 0
})


// TODO: 抽象到 models 中
const map: GridItemMap = {
    title: { index: 'id' },
    subTitle: { index: 'transaction_count', process: (v) => v + ' 笔交易' },
    desc: { index: 'time' }
}

const { data, error } = useBlockList(params)

function toBlockDetail(blockid: number) {
    router.push(`/block/${blockid}`)
}
</script>

<style scoped>
.horizon-scroll {
    overflow-x: auto;
    width: 100%;
}


.horizon-scroll::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.grids {
    width: fit-content;
    display: flex;
    gap: 22px;
}

</style>