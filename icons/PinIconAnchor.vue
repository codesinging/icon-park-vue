<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><line x1="14" y1="8" x2="34" y2="8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><line x1="14" y1="8" x2="34" y2="8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><line x1="14" y1="40" x2="34" y2="40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="36" y="4" width="8" height="8" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="4" width="8" height="8" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="36" y="36" width="8" height="8" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="36" width="8" height="8" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><line x1="40" y1="14" x2="40" y2="34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><line x1="8" y1="14" x2="8" y2="34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAnchor",
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