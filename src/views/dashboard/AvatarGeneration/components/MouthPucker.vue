<template>
  <g :transform="transform">
    <title>mouth - pucker</title>
    <path
      d="M26 16.6965C30.1667 14.3631 47 11.3964 47 18.1964C47 26.6964 35.5 26.1965 35.5 26.1965C35.5 26.1965 48.5447 23.0354 46 32.1965C43.5 41.1965 36.5 37.6965 34.5 36.6965"
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
