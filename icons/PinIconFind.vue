<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 7.00012H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 23.0001H15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 39.0001H15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M31.5 34.0001C36.1944 34.0001 40 30.1945 40 25.5001C40 20.8057 36.1944 17.0001 31.5 17.0001C26.8056 17.0001 23 20.8057 23 25.5001C23 30.1945 26.8056 34.0001 31.5 34.0001Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M37 32.0001L44 39.0506" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFind",
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