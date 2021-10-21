<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 14L9 21.9H39L34 15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="31" cy="13" r="4" :fill="color" :stroke="color" :stroke-width="strokeWidth"/><path d="M33 9L35 4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M9.5 26.9568C8.89836 27.2576 8.33775 27.577 7.82243 27.9131C5.41836 29.481 4 31.4118 4 33.5C4 38.7467 12.9543 43 24 43C35.0457 43 44 38.7467 44 33.5C44 31.3609 42.5116 29.387 40 27.7991" :stroke="color" :stroke-width="strokeWidth"/><rect x="9" y="22" width="30" height="12" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22H40" :stroke="color" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconCakeOne",
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