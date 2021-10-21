<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 24L41 24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 7L24 41" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="5" width="4" height="4" :fill="color"/><rect x="14" y="5" width="4" height="4" :fill="color"/><rect x="30" y="5" width="4" height="4" :fill="color"/><rect x="39" y="5" width="4" height="4" :fill="color"/><rect x="39" y="14" width="4" height="4" :fill="color"/><rect x="5" y="14" width="4" height="4" :fill="color"/><rect x="5" y="39" width="4" height="4" :fill="color"/><rect x="14" y="39" width="4" height="4" :fill="color"/><rect x="30" y="39" width="4" height="4" :fill="color"/><rect x="39" y="39" width="4" height="4" :fill="color"/><rect x="39" y="30" width="4" height="4" :fill="color"/><rect x="5" y="30" width="4" height="4" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconScan",
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