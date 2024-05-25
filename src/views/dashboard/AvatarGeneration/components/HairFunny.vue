<template>
  <g :transform="transform">
    <title>hair - funny</title>
    <path d="M140 56C154.667 55.3333 180.4 47.2 166 20" stroke="black" stroke-width="4"></path>
    <path d="M114 54C128.667 53.3333 154.4 45.2 140 18" stroke="black" stroke-width="4"></path>
    <path d="M78 65C92.6667 64.3333 118.4 56.2 104 29" stroke="black" stroke-width="4"></path>
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
