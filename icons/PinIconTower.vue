<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="17" y="31" width="14" height="13" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="19" y="17" width="10" height="14" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="21" y="4" width="6" height="13" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M4 44H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTower",
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