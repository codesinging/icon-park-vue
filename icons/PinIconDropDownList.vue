<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M40 28L24 40L8 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10H40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 18H40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDropDownList",
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