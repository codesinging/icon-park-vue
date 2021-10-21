<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12V44H40V4H14L8 12Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M15 15V21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M21 12V18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 12V18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M27 12V18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSdCard",
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