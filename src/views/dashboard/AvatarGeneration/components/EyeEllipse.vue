<template>
  <g :transform="transform">
    <title>eyes - ellipse</title>
    <ellipse
      cx="16.5301"
      cy="29.4023"
      rx="9"
      ry="13.5"
      transform="rotate(-6.77646 16.5301 29.4023)"
      fill="black"
    ></ellipse>
    <ellipse
      cx="80.5312"
      cy="19.4021"
      rx="9"
      ry="13.5"
      transform="rotate(-6.27568 80.5312 19.4021)"
      fill="black"
    ></ellipse>
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
