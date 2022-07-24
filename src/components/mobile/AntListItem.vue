<template>
    <a-list-item class="item">
        <span class="primary-text">
            {{ title }}
        </span>
        <span class="second-text">
            <slot></slot>
        </span>
    </a-list-item>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'default'
    }
})
</script>

<style scoped>
.item {
    display: flex;
    flex-wrap: nowrap;
    padding: 12px 0;
}

.primary-text {
    flex-shrink: 0;
    font-weight: bold;
    margin-right: 24px;
}

.second-text {
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>