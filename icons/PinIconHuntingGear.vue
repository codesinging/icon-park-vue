<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 29H4V42H44V29Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M20 17H28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconHuntingGear",
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