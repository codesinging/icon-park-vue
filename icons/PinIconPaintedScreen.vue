<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="10" width="38" height="28" rx="3" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M13 24L13 17" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="29" width="4" height="4" rx="2" transform="rotate(90 15 29)" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconPaintedScreen",
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