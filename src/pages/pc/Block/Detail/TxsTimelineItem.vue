<template>
    <div class="item-row">
        <div> {{ tx?.time }} </div>
        <div class="hash">
            <router-link :to="'/transaction/' + tx?.hash">
                {{ tx?.hash }}
            </router-link>
        </div>
        <div class="hash"> {{ tx?.sender }} </div>
        <div>
            <a-space>
                <arrow-right-outlined />
            </a-space>
        </div>
        <div class="hash"> {{ tx?.recipient }} </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue';

defineProps({
    tx: Object
})
</script>

<style scoped>
.item-row {
    display: flex;
    gap: 12px;
}

.item-row div {
    flex: none;
}

.hash {
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>