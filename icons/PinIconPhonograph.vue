<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" :stroke="color" :stroke-width="strokeWidth"/><circle cx="24" cy="25" r="11" fill="none" :stroke="color" :stroke-width="strokeWidth"/><rect x="22" y="23" width="4" height="4" rx="2" :fill="color"/><rect x="34" y="34" width="4" height="4" rx="2" :fill="color"/><path d="M28 20L36 12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPhonograph",
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