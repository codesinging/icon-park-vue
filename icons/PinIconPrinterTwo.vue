<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38 20V8C38 6.89543 37.1046 6 36 6H12C10.8954 6 10 6.89543 10 8V20" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="6" y="20" width="36" height="22" rx="2" :stroke="color" :stroke-width="strokeWidth"/><path d="M20 34H35V42H20V34Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 26H15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPrinterTwo",
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