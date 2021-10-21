<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M33 21L31 22L29 21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 21L17 22L15 21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 38V44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8C23.75 7 22 4 18 4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8C24.0833 7 24.6 4.8 26 4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.9754 40C31.9754 34 31.9754 31 24 31C16 31 16.0246 34 16.0246 40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 23V27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M43 23V27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconChildWithPacifier",
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