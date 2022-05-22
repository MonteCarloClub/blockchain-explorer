<template>
    <div :class="{ item: padding }">
        <div class="item-row">
            <div class="primary-text"> {{ display.title }} </div>
            <div class="second-text"> {{ display.subTitle }} </div>
        </div>
        <div class="item-row">
            <div>{{ display.desc }}</div>
            <div>{{ display.subDesc }}</div>
        </div>
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
    padding-bottom: 20px;
}

.item-row {
    display: flex;
    padding-bottom: 8px;
}

.item-row :nth-child(1) {
    flex: 1;
}

.primary-text {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 12px;
}
</style>