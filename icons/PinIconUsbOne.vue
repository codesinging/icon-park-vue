<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><rect :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" x="6" y="21" width="36" height="21"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" points="14 21 14 6 14 6 34 6 34 21" fill="none" fill-rule="evenodd"/><path d="M20,12 L20,14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M28,12 L28,14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconUsbOne",
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