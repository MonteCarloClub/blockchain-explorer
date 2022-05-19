<template>
    <div>
        <Title title="区块列表">
            <a-button type="primary" @click="refresh">刷新</a-button>
        </Title>
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
import Title from '@/components/Title.vue';
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

</style>