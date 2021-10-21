<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-c5c935ac1e0cd6d)"><path d="M11.549 16.6253L13.0129 11.161C13.0129 11.161 8.21885 12.3128 5.91213 14.0184C3.6054 15.7239 3.25986 19.4167 5.98653 20.9909C8.7132 22.5651 44.1733 39.9362 44.1733 39.9362L41.4054 31.142L11.549 16.6253Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 35L26 38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 25L26 9L22 7L19 20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-c5c935ac1e0cd6d"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconDescend",
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