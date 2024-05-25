<template>
  <g :transform="transform">
    <title>mouth - frown</title>
    <path
      d="M2 41C5.21065 33.0427 17.1069 16.2329 39.0069 12.6522C60.9069 9.07139 72.1273 21.1068 75 27.5721"
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
    default: '#F4D150'
  }
})
</script>
