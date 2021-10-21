<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" :stroke="color" :stroke-width="strokeWidth"/><path d="M13 24C13 17.9249 17.9249 13 24 13" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="24" cy="24" r="5" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconCd",
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