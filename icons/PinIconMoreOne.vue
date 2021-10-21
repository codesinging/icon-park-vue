<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><circle cx="24" cy="12" r="3" :fill="color"/><circle cx="24" cy="24" r="3" :fill="color"/><circle cx="24" cy="35" r="3" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconMoreOne",
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