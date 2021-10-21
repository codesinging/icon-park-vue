<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="4" width="32" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="11" width="20" height="9" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="26" r="2" :fill="color"/><circle cx="17" cy="32" r="2" :fill="color"/><circle cx="17" cy="38" r="2" :fill="color"/><circle cx="24" cy="26" r="2" :fill="color"/><circle cx="24" cy="32" r="2" :fill="color"/><circle cx="24" cy="38" r="2" :fill="color"/><circle cx="31" cy="26" r="2" :fill="color"/><circle cx="31" cy="32" r="2" :fill="color"/><circle cx="31" cy="38" r="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconCalculatorOne",
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