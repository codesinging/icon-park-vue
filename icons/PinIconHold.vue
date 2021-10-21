<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 24L26 26C26 26 41 23 43 23C45 23 45 25 43 27C41 29 34 35 28 35C22 35 18 32 14 32C10 32 4 32 4 32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20C6 18 10 15 14 15C18 15 27.5 19 29 21C30.5 23 26 26 26 26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconHold",
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