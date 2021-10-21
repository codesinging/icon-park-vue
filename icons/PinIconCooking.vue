<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 42L42 42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M6 36L42 36" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M9 25C9 16.7157 15.7157 10 24 10V10C32.2843 10 39 16.7157 39 25V36H9L9 25Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 25V29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconCooking",
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