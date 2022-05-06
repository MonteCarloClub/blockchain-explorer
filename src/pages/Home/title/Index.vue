<template>
    <canvas ref="canvasEl"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ParticleText } from "./particles";

const canvasEl = ref<HTMLCanvasElement | null>(null)
const props = defineProps({
    width: {
        type: Number,
        default: 500
    },
    height: {
        type: Number,
        default: 300
    },
    text: {
        type: String,
        default: "Hello World"
    }
})

onMounted(() => {
    const canvas = canvasEl.value
    if (canvas) {
        canvas.width = props.width;
        canvas.height = props.height;
        var cool = ParticleText(canvas, {
            text: props.text,
            radius: 50,
            size: 2,
            color: "#000000"
        })
        cool.init()
    }
});
</script>

<style scoped>

</style>
