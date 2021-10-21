<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 36H44L39 44H9L4 36Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 30V36H37L37 31C37 25 34 23 34 23C36 20.5 37 17 34 15C31 13 28.5 15 27 17C27 17 11 15 11 30Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 24C21 24 20 24.5 19 26C18 27.5 18 29 18 29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M39 9C38.4667 9.64 35.4444 13.2667 34 15" :stroke="color" :stroke-width="strokeWidth"/><circle cx="38.3559" cy="7.48259" r="2.5" transform="rotate(35.0717 38.3559 7.48259)" :fill="color"/><circle cx="40.8112" cy="9.20639" r="2.5" transform="rotate(35.0717 40.8112 9.20639)" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconTurkey",
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