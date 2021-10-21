<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6H8C6.89543 6 6 6.89543 6 8V16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 42H8C6.89543 42 6 41.1046 6 40V32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 42H40C41.1046 42 42 41.1046 42 40V32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 6H40C41.1046 6 42 6.89543 42 8V16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="14" width="20" height="20" rx="10" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle r="3" transform="matrix(-1 0 0 1 24 24)" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconFocus",
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