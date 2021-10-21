<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-4e747f818dba777d)"><path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z" :stroke="color" :stroke-width="strokeWidth"/><path d="M19 40L32 18" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M32 40L38 29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></g><defs><clipPath id="icon-4e747f818dba777d"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconProportionalScaling",
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