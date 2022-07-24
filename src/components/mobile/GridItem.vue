<template>
    <div class="item">
        <div class="title">
            <div class="icon">
                <slot></slot>
            </div>
            <div class="primary"> {{ display.title }} </div>
        </div>
        <div class="second"> {{ display.subTitle }} </div>
        <div class="third">{{ display.desc }}</div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { GridItemMap } from "./types";

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    map: {
        type: Object as PropType<GridItemMap>,
        required: true
    },
    padding: {
        type: Boolean,
        default: false
    }
})

const display: {
    [key: string]: any
} & GridItemMap = { ...props.map };

Object.entries(props.map).map(([key, value]) => {
    let val = props.data[value.index]
    if (value.process) {
        val = value.process(val)
    }
    display[key] = val
})
</script>

<style scoped>
.item {
    background-color: white;
    border-radius: 6px;
    padding: 12px;
}

.item:hover {
    background-color: var(--hover-color, #ededed);
}

.title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.icon :deep(img) {
    width: 28px;
    height: 28px;
}

.primary {
    font-weight: bold;
    margin-right: 12px;
}

.second {
    margin-bottom: 6px;
}

.third {
    white-space: nowrap;
}
</style>