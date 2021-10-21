<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(4.000000, 8.000000)"><rect :stroke="color" fill="none" fill-rule="nonzero" x="0" y="0" width="40" height="32" rx="2" stroke-linejoin="round" :stroke-width="strokeWidth"/><rect :stroke="color" fill="none" fill-rule="nonzero" x="24" y="8" width="8" height="8" stroke-linejoin="round" :stroke-width="strokeWidth"/><path d="M8,24 L32,24" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M8,8 L14,8" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/><path d="M8,16 L14,16" :stroke="color" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconIdCard",
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