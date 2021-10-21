<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 26V14C36 12.8954 35.1046 12 34 12H10C8.89543 12 8 12.8954 8 14V38C8 39.1046 8.89543 40 10 40H27" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12V40" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 12V29" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 12V6C28 4.89543 27.1046 4 26 4H18C16.8954 4 16 4.89543 16 6V12" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 44C39.9706 44 44 39.9706 44 35C44 30.0294 39.9706 26 35 26C30.0294 26 26 30.0294 26 35C26 39.9706 30.0294 44 35 44Z" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M34 32V36H38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 40V44" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBaggageDelay",
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