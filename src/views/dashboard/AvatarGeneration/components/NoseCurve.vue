<template>
  <g :transform="transform">
    <title>nose - curve</title>
    <path
      d="M16.5 7C16.1667 10.8333 16.5 19.2 20.5 22C25.5 25.5 20 34 10 32"
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
