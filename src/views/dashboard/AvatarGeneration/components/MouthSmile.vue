<template>
  <g :transform="transform">
    <title>mouth - smile</title>
    <path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke="black" stroke-width="4"></path>
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
    default: '#F4D150'
  }
})
</script>
