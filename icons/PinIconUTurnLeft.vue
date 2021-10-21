<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 13H33C39.0751 13 44 17.9249 44 24V24C44 30.0751 39.0751 35 33 35H4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 40L4 35L9 30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="13" r="5" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconUTurnLeft",
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