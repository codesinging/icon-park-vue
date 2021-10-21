<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="40" r="4" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="26" cy="8" r="4" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="36" cy="24" r="4" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="12" cy="24" r="4" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M32 24L16 24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L15 21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.9998 27L24.9987 37" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconWholeSiteAccelerator",
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