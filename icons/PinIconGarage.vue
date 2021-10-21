<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="36" height="38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="12" y="12" width="24" height="6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 18V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M32 18V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 24H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 30H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 36H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconGarage",
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