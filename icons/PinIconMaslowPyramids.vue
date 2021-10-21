<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-42828e968b7028ab)"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4L15 19.9803H33L24 4Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M24 19.9805L24.0083 44.0001" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M11.3466 25.9746L2 42.0001H17.0046" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.10059 30.9951H17.0049" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36.7481 25.9746L46.0947 42.0001H31.0004" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.0947 30.9951H31.1007" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></g><defs><clipPath id="icon-42828e968b7028ab"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconMaslowPyramids",
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