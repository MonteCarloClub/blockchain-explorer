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
            color: "#000000",
            fontSize: 36,
            radius: 50,
            textX: 24,
            textY: props.height - 42,
            size: 1,
            gap: 1,
            speed: 5
        })
        cool.init()
    }
});
</script>

<style scoped>

</style>
