<template>
  <g :transform="transform">
    <title>mouth - sad</title>
    <path
      d="M13 46C14.7153 38.0427 21.0708 21.2329 32.7708 17.6522C44.4708 14.0714 50.4653 26.1068 52 32.5721"
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
