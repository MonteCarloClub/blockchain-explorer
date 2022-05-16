<template>
    <div class="container">
        <div class="desc">
            <div class="title">交易列表</div>
            <div class="buttons">
                <a-button type="primary">刷新</a-button>
            </div>
        </div>
        <div class="table-card">
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


<script lang="ts">
import { defineComponent } from "vue";
import { ArrowRightOutlined } from '@ant-design/icons-vue';
// import { list } from "@/api/transaction";
import { columns } from "./columns";
import txs from '@/mock/transactions.json'

export default defineComponent({
    components: {
        ArrowRightOutlined
    },

    setup() {
        return {
            data: txs.data,
            columns,
        };
    },

    mounted() {
        // list({
        //     s: 'internal_value_usd(desc)',
        //     limit: 10,
        //     offset: 0
        // }).then(res => {
        //     console.log(res);
        // })
    }
});

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

.table-card {}
</style>