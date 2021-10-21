<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="47.7778" height="47.7778" fill="white" fill-opacity="0.01"/><rect x="10" y="4" width="28" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth"/><path d="M16 34H24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 30V38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="16" y="10" width="16" height="9" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><circle cx="31" cy="30" r="2" :fill="color"/><circle cx="31" cy="38" r="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconGameConsole",
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