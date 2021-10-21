<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M6 19.0586H42" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16.1231 6L6 15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 10.0068L32 19" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M26.1232 6L11.9236 18.6242" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36.1232 6L21.9236 18.6242" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFreezeLine",
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