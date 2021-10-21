<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polygon :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" points="6 9 20.4 25.8177778 20.4 38.4444444 27.6 42 27.6 25.8177778 42 9"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconFilter",
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