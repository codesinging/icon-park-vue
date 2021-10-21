<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="17" r="2" :fill="color"/><circle cx="27" cy="23" r="2" :fill="color"/><circle cx="21" cy="23" r="2" :fill="color"/><path d="M41 39.92C41 39.92 36.0457 44 24 44C11.9543 44 7 39.92 7 39.92" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconWatermelonOne",
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