<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44.0001 11C44.0001 11 44 36.0623 44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4.00003 41.3137 4.00003 38C4.00003 36.1423 4 11 4 11" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 29C44 32.3137 35.0457 35 24 35C12.9543 35 4 32.3137 4 29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 20C44 23.3137 35.0457 26 24 26C12.9543 26 4 23.3137 4 20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="24" cy="10" rx="20" ry="6" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconData",
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