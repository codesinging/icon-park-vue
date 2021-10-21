<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 14.5V3.99997L28 3.99999V13.5" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M14 25V15.4619L34 13V23" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M11 35V26L37 23V32" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M40 44H8V36L40 32V44Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTowerOfBabel",
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