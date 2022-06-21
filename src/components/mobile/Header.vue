<template>
    <div class="header">
        <div class="header-item icon">
            <img :src="menuIcon" />
        </div>
        <div class="header-item logo">
            Logo
        </div>
    </div>
</template>
<script lang="ts" setup>
import menuIcon from "@/assets/menu.svg"
</script>
<style scoped>
.header {
    height: 48px;
    width: 100%;
    background: rgba(32, 32, 32, 0.9);
    list-style: none;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-item {
    display: flex;
    padding: 0 12px;
    color: rgba(188, 188, 188, 0.9);
    font-weight: bold;
    overflow: hidden;
    justify-content: center;
    /* 主轴 */
    align-items: center;
    /* 交叉轴 */
}

.icon {
    display: flex;
    width: 48px;
}
</style>