<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44V41" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 20L24 41L4 20H44Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 12H4V20H44V12Z" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 12V4" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSpinningTop",
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