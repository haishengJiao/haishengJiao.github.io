<template>
  <g :transform="transform">
    <title>nose - pointed</title>
    <path
      d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32"
      stroke="#171921"
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
