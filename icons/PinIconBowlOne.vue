<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 38L16 44H32L30 38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10L12 14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36 10L36 14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 5L24 14" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBowlOne",
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