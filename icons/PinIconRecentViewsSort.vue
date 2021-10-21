<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M6 5V30H42V5" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 37L24 43L18 37" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 30V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 21C28.0501 21 31.7168 19 35 15C31.7168 11 28.0501 9 24 9C19.9499 9 16.2832 11 13 15C16.2832 19 19.9499 21 24 21Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconRecentViewsSort",
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