<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.4351 5.32227L40.8493 6.73648C42.4114 8.29858 42.4114 10.8312 40.8493 12.3933L33.7782 19.4644L29.5356 15.2218L39.4351 5.32227Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="28.1213" y="13.8076" width="10" height="16" transform="rotate(45 28.1213 13.8076)" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="15.3936" y="23.7071" width="14" height="14" transform="rotate(45 15.3936 23.7071)" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconLipstickOne",
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