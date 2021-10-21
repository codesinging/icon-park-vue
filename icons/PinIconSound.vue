<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="8" y="4" width="32" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="15" r="5" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="14" cy="10" r="2" :fill="color"/><circle cx="14" cy="38" r="2" :fill="color"/><circle cx="34" cy="10" r="2" :fill="color"/><circle cx="34" cy="38" r="2" :fill="color"/><circle cx="24" cy="32" r="6" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconSound",
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