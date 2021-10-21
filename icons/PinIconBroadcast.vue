<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0005 28.6292C26.5109 28.6292 28.546 26.6005 28.546 24.0979C28.546 21.5954 26.5109 19.5667 24.0005 19.5667C21.4901 19.5667 19.4551 21.5954 19.4551 24.0979C19.4551 26.6005 21.4901 28.6292 24.0005 28.6292Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M16 15C10.6667 19.9706 10.6667 28.0294 16 33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 33C37.3333 28.0294 37.3333 19.9706 32 15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10C2 17.732 2 30.268 10 38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.1426 38.1959C45.9531 30.4098 45.9531 17.7861 38.1426 10" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBroadcast",
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