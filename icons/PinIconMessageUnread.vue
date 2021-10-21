<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 16V36H29L24 41L19 36H4V6H34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 20H25.0025" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33.0011 20H35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M13.001 20H14.9999" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="43" cy="7" r="3" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconMessageUnread",
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