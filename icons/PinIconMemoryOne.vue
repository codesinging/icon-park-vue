<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="28" width="38" height="14" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="6" width="38" height="14" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="11" y="11" width="4" height="4" rx="2" :fill="color"/><rect x="11" y="33" width="4" height="4" rx="2" :fill="color"/><rect x="19" y="11" width="4" height="4" rx="2" :fill="color"/><rect x="19" y="33" width="4" height="4" rx="2" :fill="color"/><path d="M31 13H35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 35H35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconMemoryOne",
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