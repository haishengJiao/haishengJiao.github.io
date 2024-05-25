<template>
  <g :transform="transform">
    <title>mouth - smirk</title>
    <path
      d="M10.0007 24.1649C14.941 30.6115 22.4277 37.7537 33.9767 36.125C45.5257 34.4963 50.6642 26.5297 49.1492 20.0779"
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
