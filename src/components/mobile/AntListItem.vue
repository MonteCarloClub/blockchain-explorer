<template>
    <a-list-item>
        <div class="primary-text">
            {{ title }}
        </div>
        <div class="second-text">
            <slot></slot>
        </div>
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
.primary-text {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 12px;
}

.second-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 12px;
}
</style>