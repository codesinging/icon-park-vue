<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12C6 7.58172 9.58172 4 14 4H19C20.1046 4 21 4.89543 21 6V40C21 41.1046 20.1046 42 19 42H14C9.58172 42 6 38.4183 6 34V12Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M42 14C42 9.58172 38.4183 6 34 6H28C26.8954 6 26 6.89543 26 8V42C26 43.1046 26.8954 44 28 44H34C38.4183 44 42 40.4183 42 36V14Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><rect x="11" y="30" width="5" height="5" rx="2.5" :fill="color"/><rect x="31.5" y="14" width="5" height="5" rx="2.5" :fill="color"/><path d="M15 17H12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 28V34" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 31L37 31" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSwitchNintendo",
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