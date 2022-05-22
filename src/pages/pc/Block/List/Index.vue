<template>
    <div>
        <Title title="区块列表">
            <a-button type="primary" @click="refresh">刷新</a-button>
        </Title>
        <div>
            <BlockTable :data="data"></BlockTable>
        </div>
    </div>
</template>


<script lang="ts" setup>
import BlockTable from '@/components/tables/BlockTable.vue';
import { useBlockList } from "@/composition/useMock";
import Title from '@/components/Title.vue';
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