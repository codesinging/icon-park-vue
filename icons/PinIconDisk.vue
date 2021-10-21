<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M34 4V22H15V4H34Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M29 11V15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M11.9969 4H36.9985" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDisk",
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