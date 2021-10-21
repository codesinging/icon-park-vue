<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="30" height="40" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="10" r="2" :fill="color"/><circle cx="16" cy="10" r="2" :fill="color"/><circle cx="32" cy="38" r="2" :fill="color"/><circle cx="16" cy="38" r="2" :fill="color"/><path d="M24 30C28.4183 30 32 26.4183 32 22C32 17.5817 28.4183 14 24 14C19.5817 14 16 17.5817 16 22" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 22L18 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconHdd",
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