<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="19" :stroke="color" :stroke-width="strokeWidth"/><circle cx="24" cy="24" r="7" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDoughnut",
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