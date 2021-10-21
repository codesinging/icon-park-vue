<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 4H14V14H34V4Z" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 14L33 37H15L21 14" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 44H8V40L14 37H34L40 40V44Z" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 23.02H36" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 4V8" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.5 4V8" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconChess",
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