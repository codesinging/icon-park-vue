<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 18L24 8L44 18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 18V4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 30V16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="36" r="6" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M38 30V16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 36L38 30L44 36L38 42L32 36Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 23V18H19V23" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBabyMobile",
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