<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(8.000000, 4.000000)"><rect stroke-linecap="round" x="0" y="0" width="32" height="40" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><path d="M11.7368854,16.7775148 C7.73688539,15.2066736 4,11.7624921 0,6 M32,6 C28,11.7624921 24.319097,15.3206733 20.319097,16.8915145" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color" fill="none" fill-rule="evenodd"/><circle fill="none" fill-rule="nonzero" cx="16" cy="18.5" r="4.5" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="color"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconRedEnvelopes",
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