<template>
    <svg :width="size" :height="size" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M48 1H0V49H48V1Z" fill="white" fill-opacity="0.01"/><path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M15 23L22 30L34 18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconProtect",
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