<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2"/><path d="M23 29L21 36L12 34L7 44" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 36L23 44H34" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 23L23 29L35 27L41.04 22.03" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4C26 2 36 6 44 15" :stroke="color" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconGymnastics",
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