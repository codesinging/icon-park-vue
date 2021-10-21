<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 7H4V37H19L24 42L29 37H44V7Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16H20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 24H16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M29 14L36 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28.9998 14L21.9998 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 24H34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTextMessage",
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