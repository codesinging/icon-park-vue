<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12L18 6H30L33 12H15Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M17 34L24 20L31 34" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 30.0382H29" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAperturePriority",
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