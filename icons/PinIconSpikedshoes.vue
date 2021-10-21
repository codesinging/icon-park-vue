<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 6H28V14H44V6Z" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 14V36C44 37.11 43.11 38 42 38H8C5.79 38 4 36.21 4 34V28C4 23.58 7.58 20 12 20H28V14H44Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 26V20" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 26V20" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42V38" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 42V38" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 42V38" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 42V38" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 42V38" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 20L12 20" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSpikedshoes",
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