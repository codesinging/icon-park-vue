<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.59202 19.4667C4.29018 18.2091 5.24343 17 6.53679 17H41.4632C42.7566 17 43.7098 18.2091 43.408 19.4667L38.368 40.4667C38.1522 41.366 37.348 42 36.4232 42H11.5768C10.652 42 9.84784 41.366 9.63202 40.4667L4.59202 19.4667Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="11" y="7" width="8" height="10" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 17L25.5 8.00003L38 17" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 25H23" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconReceive",
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