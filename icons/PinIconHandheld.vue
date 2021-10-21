<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" points="42 18 42 44 6 44 6 18 6 18" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><rect :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" x="6" y="4" width="36" height="14" stroke-linejoin="round"/><path d="M16,27 L16,35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M12,31 L20,31" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><circle :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" cx="32" cy="31" r="4" stroke-linejoin="round"/></g></svg>
</template>

<script>
export default {
    name: "PinIconHandheld",
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