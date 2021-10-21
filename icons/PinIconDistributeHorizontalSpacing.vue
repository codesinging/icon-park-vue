<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 43L8 5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M40 43L40 5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="20" y="14" width="8" height="20" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDistributeHorizontalSpacing",
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