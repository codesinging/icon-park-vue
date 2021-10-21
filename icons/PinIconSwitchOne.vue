<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="19" fill="none" :stroke="color" :stroke-width="strokeWidth"/><rect x="36.0063" y="19.3335" width="10.5189" height="24.0125" rx="5.25944" transform="rotate(90 36.0063 19.3335)" fill="none" :stroke="color" :stroke-width="strokeWidth"/><rect x="36.0063" y="29.8524" width="10" height="10" rx="5" transform="rotate(-180 36.0063 29.8524)" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconSwitchOne",
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