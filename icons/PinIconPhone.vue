<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M22 37H26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPhone",
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