<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H43L38.8 43H9.2L5 17Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 17C35 10.3726 30.0751 5 24 5C17.9249 5 13 10.3726 13 17" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="26" r="2" :fill="color"/><path d="M18 33C18 33 20 36 24 36C28 36 30 33 30 33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="31" cy="26" r="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconShoppingBag",
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