<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.313V9H44V19.313C41.8815 20.068 40.3636 22.1053 40.3636 24.5C40.3636 26.8947 41.8815 28.932 44 29.687V40H4V29.687C6.11853 28.932 7.63636 26.8947 7.63636 24.5C7.63636 22.1053 6.11853 20.068 4 19.313Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M19 16L24 21L29 16" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 22H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 28.1667H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 22V34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconCoupon",
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