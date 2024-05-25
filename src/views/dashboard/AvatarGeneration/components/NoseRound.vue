<template>
  <g :transform="transform">
    <title>nose - round</title>
    <path
      d="M12.307 12.3397C17.753 11.0993 26.6843 12.9603 24.7238 22.8833C22.9813 31.7023 13.6141 32.1857 11 29.7048"
      stroke="black"
      stroke-width="4"
    ></path>
  </g>
</template>

<script setup lang="ts">
defineProps({
  transform: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>
