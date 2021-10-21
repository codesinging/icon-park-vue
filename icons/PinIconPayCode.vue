<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(4.000000, 4.000000)"><rect :stroke="color" fill="none" fill-rule="nonzero" x="0" y="0" width="40" height="40" stroke-linejoin="round" :stroke-width="strokeWidth"/><path d="M8,12 L8,28" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M16,12 L16,28" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M24,12 L24,28" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M32,12 L32,28" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconPayCode",
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