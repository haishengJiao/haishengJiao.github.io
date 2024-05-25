<template>
  <g :transform="transform">
    <title>earrings - hoop</title>
    <path
      d="M26 2C39.2548 2 50 12.7452 50 26C50 39.2548 39.2548 50 26 50C12.7452 50 2 39.2548 2 26C2 19.6087 5.5 14.5 8.5715 9.5L9.5 8"
      stroke="#F4D150"
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
