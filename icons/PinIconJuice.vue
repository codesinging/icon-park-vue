<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 24H33L31.2 44H16.8L15 24Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="11" y="18" width="26" height="6" rx="3" :stroke="color" :stroke-width="strokeWidth"/><path d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M28 4L26 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconJuice",
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