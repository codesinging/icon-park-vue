<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 42.0012V21.6875C36 15.3125 31.0909 10 24 10C16.9091 10 12 15.3125 12 21.6875V42.0012C12 43.1058 12.8954 44 14 44H34C35.1046 44 36 43.1058 36 42.0012Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="24" cy="23" r="4" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18 34H20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M26 38H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M12 20V4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconRadioNanny",
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