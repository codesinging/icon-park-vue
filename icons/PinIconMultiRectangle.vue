<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M12 39H44V7H12V15" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M8 39H32V15H8V23" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="23" width="16" height="16" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconMultiRectangle",
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