<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 21H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18 42L18 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36 42L36 21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAddText",
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