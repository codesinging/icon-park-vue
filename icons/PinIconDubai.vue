<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L14 44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44" :stroke="color" :stroke-width="strokeWidth"/><path d="M4 44H44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 15H32" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 22H22" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 29H26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 36H27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDubai",
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