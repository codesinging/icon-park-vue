<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 8H4V38H19L24 43L29 38H44V8Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 15L20 32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 15L27 32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 20L16 20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M32 27L15 27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTopicDiscussion",
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