<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19H6V6H42V19H36" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12H36V44L30 39.5556L24 44L18 39.5556L12 44V12Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 26H28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 22L24 30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAddPrint",
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