<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01"/><ellipse cx="24" cy="39" rx="18" ry="6" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M6 39H42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M6 39L23.9999 4L42 39" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconCone",
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