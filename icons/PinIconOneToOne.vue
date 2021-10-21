<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M12 20.5799L16 18V30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 20.5799L35 18V30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 20V21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 27V28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconOneToOne",
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