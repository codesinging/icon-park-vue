<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 12V4H18V12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 12.3735C13 12.1672 13.1672 12 13.3735 12H34.6265C34.8328 12 35 12.1672 35 12.3735V33C35 39.0751 30.0751 44 24 44C17.9249 44 13 39.0751 13 33V12.3735Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M20 21L28 21" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 29L28 29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconUDisk",
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