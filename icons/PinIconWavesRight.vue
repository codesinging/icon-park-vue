<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 11V37" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 4V44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M6 11V37" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 15V33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M15 18V30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconWavesRight",
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