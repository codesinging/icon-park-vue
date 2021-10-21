<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 27H39L34.3125 44H13.6875L9 27Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M39 27H9C9 21.5 14.5 19 14.5 19C14.5 17 16.5 11 24 11C31.5 11 33.5 17 33.5 19C33.5 19 39 21.5 39 27Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 27H42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12" :stroke="color" :stroke-width="strokeWidth"/><path d="M24 8L28 4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><line x1="20" y1="27" x2="20" y2="44" :stroke="color" :stroke-width="strokeWidth"/><line x1="28" y1="27" x2="28" y2="44" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconCakeFive",
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