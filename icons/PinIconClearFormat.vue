<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-8df1ec4e1e8ff82)"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44.7818 24.1702L31.918 7.09938L14.1348 20.5L27.5 37L30.8556 34.6644L44.7818 24.1702Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M13.2056 40.0721L44.5653 40.072" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></g><defs><clipPath id="icon-8df1ec4e1e8ff82"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconClearFormat",
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