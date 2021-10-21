<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="24" y="24" width="20" height="16" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFullScreenPlay",
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