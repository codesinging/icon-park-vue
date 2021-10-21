<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(4.000000, 4.000000)"><polygon :stroke="color" fill="none" points="20 1.74860126e-15 14 6 6 6 6 14 1.74860126e-15 20 6 26 6 34 14 34 20 40 26 34 34 34 34 26 40 20 34 14 34 6 26 6" stroke-linejoin="round" :stroke-width="strokeWidth" fill-rule="nonzero"/><circle :stroke="color" fill="none" cx="20" cy="20" r="6" stroke-linejoin="round" :stroke-width="strokeWidth" fill-rule="nonzero"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconConfig",
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