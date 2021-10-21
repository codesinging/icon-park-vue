<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="13.5" r="6.5" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="34.5" cy="34.5" r="6.5" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="13.5" cy="13.5" r="6.5" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="13.5" cy="34.5" r="6.5" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconApplicationTwo",
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