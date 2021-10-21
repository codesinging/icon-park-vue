<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(6.000000, 4.000000)"><path d="M0,10 L36,10 L36,20 C32,28 26,32 18,32 C10,32 4,28 0,20 L0,10 Z" :stroke="color" fill="none" fill-rule="nonzero" stroke-linejoin="round" :stroke-width="strokeWidth"/><polyline :stroke="color" stroke-linecap="round" points="27 30 26 40 10 40 9 30" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M16,20 L20,20" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M10,8 L10,0" :stroke="color" stroke-linecap="round" transform="translate(10.000000, 4.000000) rotate(180.000000) translate(-10.000000, -4.000000) " stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M26,8 L26,0" :stroke="color" stroke-linecap="round" transform="translate(26.000000, 4.000000) rotate(180.000000) translate(-26.000000, -4.000000) " stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconPlug",
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