<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.085 35L38.9573 8.64644C38.7782 7.13694 37.4983 6 35.9782 6H12.9425C11.4569 6 10.195 7.08729 9.97542 8.55657L6.02344 35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="6" y="30" width="36" height="12" rx="6" fill="none" :stroke="color" :stroke-width="strokeWidth"/><rect x="19" y="34" width="4" height="4" rx="2" :fill="color"/><path d="M29 36H35" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12H26" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconChargingTreasure",
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