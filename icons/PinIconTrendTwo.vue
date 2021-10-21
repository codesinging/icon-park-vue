<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 44H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 26L12 28V38H4V26Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M20 24L28 20V38H20V24Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M36 16L44 12V38H36V16Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M4 18L12 20L44 4H34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTrendTwo",
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