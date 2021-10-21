<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 5H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 43H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 36V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M12 28H4V36H12V28Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M28 20H20V28H28V20Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M44 12H36V20H44V12Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M40 20V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 12V13" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 20V21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M23 12V13" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 28V43" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconVerticalTimeline",
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