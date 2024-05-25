<template>
  <g :transform="transform">
    <title>eyebrows - eyelashesdown</title>
    <path
      d="M27 29.5C33.1667 32 48.1 32.5 58.5 14.5"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M94 7C99.1667 12.3333 112.1 19.8 122.5 7"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M37.1484 29.4578L31 24.0312"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M116.219 12.4435L118.004 4.43945"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M45.5975 25.8142L41.5508 18.6816"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M108.142 12.0179L109.08 3.87109"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M52.6736 20.2005L50.4727 12.3008"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M99.993 11.031L99.2168 2.86719"
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
