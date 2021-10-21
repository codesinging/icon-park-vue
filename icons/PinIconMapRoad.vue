<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><rect :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" x="4" y="4" width="40" height="40" rx="3"/><path d="M37,12 L33,36" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" transform="translate(35.000000, 24.000000) scale(-1, 1) translate(-35.000000, -24.000000) " fill="none" fill-rule="evenodd"/><path d="M16,12 L12,36" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M24,12 L24,16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M24,22 L24,26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M24,32 L24,36" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconMapRoad",
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