<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="34.6074" y="3.4939" width="14" height="18" rx="2" transform="rotate(45 34.6074 3.4939)" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="16.2227" y="21.8787" width="14" height="18" rx="2" transform="rotate(45 16.2227 21.8787)" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M31.0723 16.929L16.9301 31.0711" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconLinkThree",
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