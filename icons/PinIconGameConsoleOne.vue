<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="4" width="28" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth"/><rect x="16" y="12" width="16" height="10" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 32L24 32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 36V28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="27" y="33" width="4" height="4" rx="2" :fill="color"/><rect x="30" y="26" width="4" height="4" rx="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconGameConsoleOne",
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