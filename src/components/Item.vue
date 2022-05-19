<template>
    <div class="item-row">
        <div class="item-title" :style="'width:' + width + 'px'">
            {{ title }}
        </div>
        <div class="item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'default'
    },
    width: {
        type: Number,
        default: 200
    },
})
</script>

<style scoped>
.item-row {
    display: flex;
    padding: 12px 0;
}

.item-title {
    flex: none;
}

.item-content {
    word-break: break-word;
    flex: 1;
}
</style>