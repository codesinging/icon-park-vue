<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="34" r="8" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="35" cy="37" r="7" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 10C34.3488 10.8116 28.6279 13.0145 25.2791 16.2609C20.2558 21.1304 19 24.5 18 27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36.9999 10C35.8833 11.3184 33.7152 14.596 33.0438 18.3892C32.0367 24.0789 33 27.5 33.9999 30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M30 4L44 16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconCherry",
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