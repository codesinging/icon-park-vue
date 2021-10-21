<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="17" y="6" width="14" height="9" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="6" y="33" width="14" height="9" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="28" y="33" width="14" height="9" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 16V24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 33V24H35V33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconChartGraph",
    props: {
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        strokeWidth: {
            type: [String, Number],
            default: 4
        },
    },
}
</script>