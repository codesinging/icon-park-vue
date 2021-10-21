<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="6" y="4" width="26" height="40" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="30" width="24" height="8" rx="4" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" :fill="color"/><circle cx="12" cy="18" r="2" :fill="color"/><circle cx="12" cy="24" r="2" :fill="color"/><circle cx="19" cy="12" r="2" :fill="color"/><circle cx="19" cy="18" r="2" :fill="color"/><circle cx="19" cy="24" r="2" :fill="color"/><circle cx="26" cy="12" r="2" :fill="color"/><circle cx="26" cy="18" r="2" :fill="color"/><circle cx="26" cy="24" r="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconElectronicDoorLock",
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