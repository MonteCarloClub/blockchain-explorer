<template>
    <div :class="{ padding: padding }">
        <div class="item-row">
            <div class="primary text"> {{ display.title }} </div>
            <div class="second text"> {{ display.subTitle }} </div>
        </div>
        <div class="divider"></div>
        <div class="item-row">
            <div class="text">{{ display.desc }}</div>
            <div class="text">{{ display.subDesc }}</div>
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
.padding {
    padding-top: 8px;
    padding-bottom: 8px;
}

.item-row {
    display: flex;
}

.item-row :nth-child(1) {
    flex: 1;
}

.divider {
    height: 8px;
}

.primary {
    font-weight: bold;
    margin-right: 12px;
}

.text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>