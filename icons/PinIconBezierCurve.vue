<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="4" y="30" width="8" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="36" y="30" width="8" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="20" y="10" width="8" height="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M20 14H4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 14H28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 30.0001C8 22.5447 13.0991 16.2803 20 14.5042" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 14.5042C34.9009 16.2803 40 22.5447 40 30.0001" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBezierCurve",
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