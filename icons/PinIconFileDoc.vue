<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 38V44H38V38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 20V14L30 4H10V20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 4V14H38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12H20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="4" y="20" width="40" height="18" rx="2" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M10 25V33" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M10 25H12C14.2091 25 16 26.7909 16 29V29C16 31.2091 14.2091 33 12 33H10" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="24" cy="29" rx="3" ry="4" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 25H36C33.7909 25 32 26.7909 32 29V29C32 31.2091 33.7909 33 36 33H38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFileDoc",
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