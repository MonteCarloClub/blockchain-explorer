<template>
    <Title :text="en" :width="width" :height="60"></Title>
    <div class="container">
        <div class="desc">
            <div class="title">区块列表</div>
            <div class="buttons">
                <a-button type="primary" @click="refresh">刷新</a-button>
            </div>
        </div>
        <a-timeline>
            <a-timeline-item v-for="(block, i) in data">
                <router-link :to="'/block/' + block.id">
                    <ListItem :data="block" :map="map"></ListItem>
                </router-link>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import Blocks from "../../Home/blocks/Index.vue";
import Title from "../../Home/title/Index.vue";
import { KCHAIN, KCHAIN_TITLE } from "@/common/constants";
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import { useBlockList } from "@/composition/useMock";

export default defineComponent({
    setup() {
        return {
            data,
            en,
            width,
            map
        };
    },
    mounted() {
    },
    methods: {
        refresh,
    },
    components: { Blocks, Title, ListItem }
});

const en = KCHAIN;
// const title = KCHAIN_TITLE;
const width = window.innerWidth;

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

const { data, error } = useBlockList(params);

function refresh() {
    params.offset += 10;
}

</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 var(--margin-lr, 92px);
}

.desc {
    margin: 32px 0;
    display: flex;
    line-height: 44px;
}

.desc .title {
    flex-grow: 1;
    font-size: 28px;
}

.desc .buttons {
    flex-grow: 0;
}
</style>