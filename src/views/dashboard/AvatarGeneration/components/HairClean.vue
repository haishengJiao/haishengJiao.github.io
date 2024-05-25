<template>
  <g :transform="transform">
    <title>tops - clean</title>
    <ellipse
      cx="147.854"
      cy="58.1803"
      rx="6.85759"
      ry="18.4393"
      transform="rotate(117 147.854 58.1803)"
      fill="#FCFDFF"
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
