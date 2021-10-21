<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><circle :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" cx="24" cy="24" r="20"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" points="11 28.1320956 16.6844708 28.1320956 21.2233858 13 24.8952638 35 29.4483373 24.6175277 32.9127137 28.1320956 37 28.1320956" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconElectrocardiogram",
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