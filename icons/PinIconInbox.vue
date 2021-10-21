<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" points="4 30 9 6 9 6 39 6 44 30" fill="none" fill-rule="evenodd"/><polygon :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" points="4 30 14.9090909 30 16.7272727 36 31.2727273 36 33.0909091 30 44 30 44 43 4 43"/><path d="M19,14 L29,14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/><path d="M16,22 L32,22" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconInbox",
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