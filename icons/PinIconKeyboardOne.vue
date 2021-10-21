<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="4" y="18" width="40" height="24" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><circle cx="14" cy="24" r="2" :fill="color"/><circle cx="16" cy="30" r="2" :fill="color"/><circle cx="10" cy="30" r="2" :fill="color"/><circle cx="20" cy="24" r="2" :fill="color"/><circle cx="22" cy="30" r="2" :fill="color"/><circle cx="26" cy="24" r="2" :fill="color"/><circle cx="28" cy="30" r="2" :fill="color"/><circle cx="32" cy="24" r="2" :fill="color"/><circle cx="34" cy="30" r="2" :fill="color"/><circle cx="38" cy="24" r="2" :fill="color"/><path d="M17 36H31" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconKeyboardOne",
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