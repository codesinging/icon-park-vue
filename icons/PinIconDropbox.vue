<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-51c87677d24082d)"><path d="M24 10L12 18L24 26L36 18L24 10Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 10L36 18L41 11L30 4L24 10Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 10L12 18L7 11L18 4L24 10Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M43 22L36 18L24 26L31 31L43 22Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M5 22L12 18L24 26L17 31L5 22Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M36 28V37L24 44L12 37V28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-51c87677d24082d"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconDropbox",
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