<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><mask id="icon-2f877677e42e43b0" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha"><rect width="48" height="48" :fill="color"/></mask><g mask="url(#icon-2f877677e42e43b0)"><rect x="38" y="30" width="28" height="12" transform="rotate(180 38 30)" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M42 40H6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 8L6 8" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
</template>

<script>
export default {
    name: "PinIconDistributeVertically",
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