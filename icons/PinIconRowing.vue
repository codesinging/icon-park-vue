<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.02 16C32.7814 16 35.02 13.7614 35.02 11C35.02 8.23858 32.7814 6 30.02 6C27.2586 6 25.02 8.23858 25.02 11C25.02 13.7614 27.2586 16 30.02 16Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2"/><path d="M42 31L35 44" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.01 40L26 29L9 40L21 20L44 25" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 40H44" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconRowing",
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