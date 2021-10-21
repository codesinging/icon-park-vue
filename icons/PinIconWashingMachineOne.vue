<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="8" y="4" width="32" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth"/><path d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="14" cy="9" r="2" :fill="color"/><circle cx="20" cy="9" r="2" :fill="color"/><circle cx="24" cy="29" r="7" fill="none" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconWashingMachineOne",
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