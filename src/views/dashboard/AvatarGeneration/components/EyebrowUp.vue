<template>
  <g :transform="transform">
    <title>eyebrows - up</title>
    <path
      d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
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
