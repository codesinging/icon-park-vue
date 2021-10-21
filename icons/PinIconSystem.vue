<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="6" y="6" width="14" height="14" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="6" y="28" width="14" height="14" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="28" y="28" width="14" height="14" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSystem",
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