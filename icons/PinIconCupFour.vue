<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 25C14 27 15.0714 32 29 32C42.9286 32 44 27 44 25C44 23 44 10 44 10H29H14C14 10 14 23 14 25Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M29 16H23V21L26 24L29 21V16Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 16V10" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 40L43 40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 14H4C4 14 5 19 5.9991 22C6.99821 25 14 24 14 24" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconCupFour",
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