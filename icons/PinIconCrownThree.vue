<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="18" r="3" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="24" cy="9" r="3" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="41" cy="18" r="3" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconCrownThree",
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