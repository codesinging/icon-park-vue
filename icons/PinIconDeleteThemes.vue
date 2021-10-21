<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H40L37 44H11L8 15Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M20.002 25.0024V35.0026" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28.0024 24.9995V34.9972" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M12 14.9999L28.3242 3L36 15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDeleteThemes",
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