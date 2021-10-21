<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 14C6 4 14 4 14 4V24H6C6 24 6 24 6 14Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="14" y="10" width="28" height="6" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M6 30H42C42 30 42 38 36 38C30 38 29 38 29 38L31 44H13L15 38H6V30Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconHammerAndAnvil",
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