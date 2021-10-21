<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 19L24 30L31 19L24 8L17 19Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M30.6667 40L24 30H37.3333L44 40H30.6667Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M17.3333 40L24 30H10.6667L4 40H17.3333Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconMitsubishi",
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