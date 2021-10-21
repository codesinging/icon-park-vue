<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 3.99976V43.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M34 11.9998V35.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 17.9998V29.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M44 17.9998V29.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 11.9998V35.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAcoustic",
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