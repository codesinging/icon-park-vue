<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10H42C43.1046 10 44 10.8954 44 12V38C44 39.1046 43.1046 40 42 40H18" :stroke="color" :stroke-width="strokeWidth"/><path d="M4 12C4 10.8954 4.89543 10 6 10H18V40H6C4.89543 40 4 39.1046 4 38V12Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M11 17V21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 16L25 33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="25" width="4" height="4" rx="2" :fill="color"/><rect x="9" y="31" width="4" height="4" rx="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconHandPaintedPlate",
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