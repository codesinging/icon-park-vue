<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 17L12 17" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36 31L12 31" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M17 36L17 12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M31 36L31 12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPoundSign",
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