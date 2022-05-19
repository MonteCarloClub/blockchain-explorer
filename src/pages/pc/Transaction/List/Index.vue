<template>
    <div class="container">
        <div class="desc">
            <div class="title">交易列表</div>
            <div class="buttons">
                <a-button type="primary" @click="refresh">刷新</a-button>
            </div>
        </div>
        <div>
            <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
                <template #bodyCell="{ column, text }">
                    <template v-if="column.dataIndex === 'hash'">
                        <router-link :to="'/transaction/' + text">{{ text }}</router-link>
                    </template>
                    <template v-if="column.dataIndex === 'block_id'">
                        <router-link :to="'/block/' + text">{{ text }}</router-link>
                    </template>
                    <template v-if="column.dataIndex === 'to_icon'">
                        <a-space>
                            <arrow-right-outlined />
                        </a-space>
                    </template>
                    <template v-if="column.dataIndex === 'sender' || column.dataIndex === 'recipient'">
                        <router-link :to="'/address/' + text">{{ text }}</router-link>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ArrowRightOutlined } from '@ant-design/icons-vue';
import { useTransactionList } from "@/composition/useMock";
import { debounce } from "@/utils/debounce";
import { columns } from "./columns";
import { reactive } from "vue";

const params = reactive({
    q: 'time(2022-05-17 15:49:30..2022-05-18 15:49:30)',
    s: 'internal_value_usd(desc)',
    limit: 10,
    offset: 0
})

const { data, error } = useTransactionList(params)

const refresh = debounce(()=>{
    console.log('wow');
    params.offset += params.limit
}, 500)
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