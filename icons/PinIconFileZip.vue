<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 38V44H38V38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 20V14L30 4H10V20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 4V14H38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12H20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="4" y="20" width="40" height="18" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M11 25H17L11 33H17" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 25V33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M31 25V33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M31 25H34.5C35.8807 25 37 26.1193 37 27.5V27.5C37 28.8807 35.8807 30 34.5 30H31" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFileZip",
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