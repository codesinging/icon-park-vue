<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M15 12L16.2 5H31.8L33 12" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M6 12H42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37 12L35 43H13L11 12H37Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 35H29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDeleteOne",
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