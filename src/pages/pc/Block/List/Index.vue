<template>
    <div class="container">
        <div class="desc">
            <div class="title">区块列表</div>
            <div class="buttons">
                <a-button type="primary" @click="refresh">刷新</a-button>
            </div>
        </div>
        <div>
            <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
                <template #bodyCell="{ column, text }">
                    <template v-if="column.dataIndex === 'id'">
                        <router-link :to="'/block/' + text">{{ text }}</router-link>
                    </template>
                    <template v-if="column.dataIndex === 'miner'">
                        <router-link :to="'/address/' + text">{{ text }}</router-link>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { useBlockList } from "@/composition/useMock";
import { columns } from "./columns";
import { reactive } from "vue";

const params = reactive({
    s: 'id(desc)',
    limit: 10,
    offset: 0
})

const { data, error } = useBlockList(params)

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