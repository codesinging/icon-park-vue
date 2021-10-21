<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="18" y="20" width="20" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="18" y="6" width="14" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="18" y="34" width="26" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M17 10H5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24H5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 38H5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 44V4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTreeList",
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