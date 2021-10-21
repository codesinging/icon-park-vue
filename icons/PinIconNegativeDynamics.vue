<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M17 33.9502V42.1102" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M9 40V42.0556" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M25 27V42.0714" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 18.9614V42.0878" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M41 10.9707V42.0833" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M7 33L34 6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M7 22L7 33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconNegativeDynamics",
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