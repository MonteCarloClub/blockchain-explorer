<template>
    <div class="item">
        <div class="icon">
            <slot></slot>
        </div>
        <div class="title">
            <div class="primary"> {{ display.title }} </div>
            <div class="second"> {{ display.subTitle }} </div>
        </div>
        <div class="third">{{ display.desc }}</div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ListItemMap } from "./types";

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    map: {
        type: Object as PropType<ListItemMap>,
        required: true
    },
    padding: {
        type: Boolean,
        default: false
    }
})

const display: {
    [key: string]: any
} & ListItemMap = { ...props.map };

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
    display: flex;
    background-color: white;
    border-radius: 6px;
    padding: 12px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.item:hover {
    background-color: var(--hover-color, #ededed);
}

.title {
    margin: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.icon img {
    width: 28px;
    height: 28px;
}

.primary {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.second {
    font-size: 12px;
    color: rgb(56, 55, 55);
}

.third {
    white-space: nowrap;
    font-size: 18px;
}
</style>