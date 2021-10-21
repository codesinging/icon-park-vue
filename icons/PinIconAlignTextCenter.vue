<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(6.000000, 8.000000)"><path d="M30,11 L6,11" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M36,1 L0,1" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M36,21 L0,21" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M30,31 L6,31" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconAlignTextCenter",
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