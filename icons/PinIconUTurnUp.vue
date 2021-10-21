<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 14L13 33C13 39.0751 17.9249 44 24 44V44C30.0751 44 35 39.0751 35 33V4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 9L35 4L40 9" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="9" r="5" transform="rotate(-90 13 9)" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconUTurnUp",
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