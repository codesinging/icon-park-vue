<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01"/><path d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24.0083 24.0083L29.6651 18.3515" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSendOne",
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