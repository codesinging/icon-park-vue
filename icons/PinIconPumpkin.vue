<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="14" width="40" height="26" rx="13" fill="none" :stroke="color" :stroke-width="strokeWidth"/><ellipse cx="24" cy="27" rx="8" ry="13" :stroke="color" :stroke-width="strokeWidth"/><path d="M30 6H27C25.3431 6 24 7.34315 24 9V14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPumpkin",
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