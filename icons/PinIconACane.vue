<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-ec1e6722188a163)"><path d="M19.5571 44.7684C19.5571 44.7684 32.4675 20.4873 33.6412 18.28C34.8149 16.0726 37.453 8.98102 30.3894 5.22524C23.3258 1.46947 19.1566 7.18063 17.7482 9.82948" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-ec1e6722188a163"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconACane",
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