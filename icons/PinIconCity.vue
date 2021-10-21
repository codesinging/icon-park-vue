<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 42H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="8" y="26" width="8" height="16" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M12 34H13" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="16" y="4" width="24" height="38" rx="2" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="22" y="10" width="4" height="4" :fill="color"/><rect x="30" y="10" width="4" height="4" :fill="color"/><rect x="22" y="17" width="4" height="4" :fill="color"/><rect x="30" y="17" width="4" height="4" :fill="color"/><rect x="30" y="24" width="4" height="4" :fill="color"/><rect x="30" y="31" width="4" height="4" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconCity",
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