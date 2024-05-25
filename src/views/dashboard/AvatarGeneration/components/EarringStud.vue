<template>
  <g :transform="transform">
    <title>earrings - stud</title>
    <circle cx="25" cy="4" r="4" fill="#F4D150"></circle>
    <circle cx="26" cy="3" r="1" fill="#FFEDEF"></circle>
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
