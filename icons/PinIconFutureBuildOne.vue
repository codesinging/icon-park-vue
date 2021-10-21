<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9998 24C15.2173 15.7039 23.9998 5 23.9998 5C23.9998 5 32.7824 15.7039 33.9998 24C35.0905 31.4323 30.9998 44 30.9998 44H16.9998C16.9998 44 12.9092 31.4323 13.9998 24Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 14H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M15 20H33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 26L34 26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M15 32H33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 38H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 44H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 4V6" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFutureBuildOne",
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