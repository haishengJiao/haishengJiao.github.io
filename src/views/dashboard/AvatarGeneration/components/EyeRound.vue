<template>
  <g :transform="transform">
    <title>eyes - round</title>
    <ellipse
      cx="16.1171"
      cy="28.9268"
      rx="9"
      ry="10"
      transform="rotate(-6.77646 16.1171 28.9268)"
      fill="black"
    ></ellipse>
    <ellipse
      cx="80.1486"
      cy="18.9231"
      rx="9"
      ry="10"
      transform="rotate(-6.27568 80.1486 18.9231)"
      fill="black"
    ></ellipse>
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
