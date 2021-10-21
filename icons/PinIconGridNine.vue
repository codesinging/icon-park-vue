<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="38" height="38" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 18H43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M5 30H43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M17 5V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M30 5V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconGridNine",
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