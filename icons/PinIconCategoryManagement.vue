<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="28" width="36" height="14" rx="4" :stroke="color" :stroke-width="strokeWidth"/><path d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="34" cy="14" r="8" fill="none" :stroke="color" :stroke-width="strokeWidth"/><circle cx="34" cy="14" r="3" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconCategoryManagement",
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