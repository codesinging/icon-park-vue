<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 30L19 33C19 36.866 15.866 40 12 40V40C8.13401 40 5 36.866 5 33L5 19" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 30L29 33C29 36.866 32.134 40 36 40V40C39.866 40 43 36.866 43 33L43 19" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="8" width="38" height="22" rx="11" fill="none" :stroke="color" :stroke-width="strokeWidth"/><path d="M21 19H13" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 15V23" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="15" width="4" height="4" rx="2" :fill="color"/><rect x="28" y="20" width="4" height="4" rx="2" :fill="color"/></svg>
</template>

<script>
export default {
    name: "PinIconGameThree",
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