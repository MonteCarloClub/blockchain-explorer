<template>
    <div class="desc">
        <div class="title">{{ title }}</div>
        <div class="buttons">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style scoped>
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