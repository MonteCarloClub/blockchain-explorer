<template>
    <Title :text="en" :width="width" :height="60"></Title>
    <div class="container">
        <div class="desc">
            <div class="title">交易列表</div>
            <div class="buttons">
                <a-button type="primary" @click="refresh">刷新</a-button>
            </div>
        </div>
        <div>
            <a-timeline>
                <a-timeline-item v-for="(tx, i) in data">
                    <router-link :to="'/transaction/' + tx.hash">
                        <ListItem :data="tx" :map="map"></ListItem>
                    </router-link>
                </a-timeline-item>
            </a-timeline>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { list } from "@/api/transaction";
import Title from "../../Home/title/Index.vue";
import { KCHAIN, KCHAIN_TITLE } from "@/common/constants";
import ListItem from "@/components/mobile/ListItem.vue";
import { ListItemMap } from "@/components/mobile/types";
import { useTransactionList } from "@/composition/useMock";
import { reactive } from "vue";

const en = KCHAIN;
// const title = KCHAIN_TITLE;
const width = window.innerWidth;

const params = reactive({
    q: 'time(2022-05-17 15:49:30..2022-05-18 15:49:30)',
    s: 'internal_value_usd(desc)',
    limit: 10,
    offset: 0
})

// TODO: 抽象到 models 中
const map: ListItemMap = {
    title: { index: 'hash' },
    subTitle: { index: 'time' },
    desc: { index: 'value_usd', process: (v) => v + ' USD' },
    subDesc: { index: 'gas_used', process: (v) => v + ' Gas' }
}

const { data, error } = useTransactionList(params);

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