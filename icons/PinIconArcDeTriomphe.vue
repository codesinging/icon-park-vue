<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16V44H18V29C18 25.6863 20.6863 23 24 23C27.3137 23 30 25.6863 30 29V44H40V16H8Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M5 10H43V13C43 14.6569 41.6569 16 40 16H8C6.34315 16 5 14.6569 5 13V10Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M5 4L43 4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 4V9" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M40 4V9" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 28L18 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M30 28L40 28" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconArcDeTriomphe",
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