<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(4.000000, 7.000000)"><rect :stroke="color" fill="none" fill-rule="nonzero" x="0" y="0" width="40" height="34" rx="5" stroke-linejoin="round" :stroke-width="strokeWidth"/><g transform="translate(13.000000, 8.000000)"><polyline points="1 0 7 6 13 0" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M0,8 L14,8" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M0,14 L14,14" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M7,8 L7,19" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/></g></g></g></svg>
</template>

<script>
export default {
    name: "PinIconPaperMoney",
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