<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6H6V18H18V6Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M18 30H6V42H18V30Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M42 30H30V42H42V30Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M42 6H30V18H42V6Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 6V24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 30V42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 24L6 24" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 24H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTwoDimensionalCodeOne",
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