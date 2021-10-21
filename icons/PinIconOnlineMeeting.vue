<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 8H4V38H19L24 43L29 38H44V8Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19V27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M20 16V30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 21V25" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36 19V27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconOnlineMeeting",
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