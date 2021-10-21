<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="42" width="26" height="38" rx="2" transform="rotate(-90 5 42)" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M9.00002 16L32 5L37 16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="23" r="2" :fill="color"/><circle cx="13" cy="29" r="2" :fill="color"/><circle cx="13" cy="35" r="2" :fill="color"/><path d="M21 35H25L36 23" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 29H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTicketsOne",
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