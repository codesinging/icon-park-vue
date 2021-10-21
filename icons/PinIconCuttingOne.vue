<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><circle :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" cx="11" cy="37" r="5"/><circle :stroke="color" :stroke-width="strokeWidth" fill="none" fill-rule="nonzero" stroke-linejoin="round" cx="37" cy="37" r="5"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" transform="translate(24.938660, 22.892210) rotate(-150.000000) translate(-24.938660, -22.892210) " points="24.9585851 3.80404093 24.9187342 7.98037837 24.9187342 41.9803784" fill="none" fill-rule="evenodd"/><polyline :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" transform="translate(23.061077, 22.794133) rotate(-30.000000) translate(-23.061077, -22.794133) " points="23.0866842 3.61900443 23.0866842 37.6190044 23.0354696 41.9692624" fill="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconCuttingOne",
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