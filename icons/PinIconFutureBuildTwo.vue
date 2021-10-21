<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 44H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="24.5" cy="7" rx="13.5" ry="3" :stroke="color" :stroke-width="strokeWidth"/><path d="M16 9C16 9 20.1593 17.8828 21 24C22.0687 31.7763 20 44 20 44" :stroke="color" :stroke-width="strokeWidth"/><path d="M32.2261 9C32.2261 9 28.0668 17.8828 27.2261 24C26.1574 31.7763 28.0001 44 28.0001 44" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconFutureBuildTwo",
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