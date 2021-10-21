<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" fill="none"/><path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" fill="none"/><path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTwoTriangles",
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