<template>
    <div class="container">
        <div class="desc">
            <div class="title">区块列表</div>
            <div class="buttons">
                <a-button type="primary">刷新</a-button>
            </div>
        </div>
        <div>
            <a-table :columns="columns" :data-source="data" size="middle" :pagination="{ position: ['bottomCenter'] }">
                <template #bodyCell="{ column, text }">
                    <template v-if="column.dataIndex === 'hash'">
                        <a>{{ text }}</a>
                    </template>
                    <template v-if="column.dataIndex === 'id'">
                        <a>{{ text }}</a>
                    </template>
                    <template v-if="column.dataIndex === 'miner'">
                        <a>{{ text }}</a>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { columns } from "./columns";
import blocks from '@/mock/blocks.json'

export default defineComponent({
    setup() {
        return {
            data: blocks.data,
            columns,
        };
    },

    mounted() {
        
    }
});

</script>

<style scoped>
.container {
    /* background-color: #fafafa; */
    padding: 0 92px;
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