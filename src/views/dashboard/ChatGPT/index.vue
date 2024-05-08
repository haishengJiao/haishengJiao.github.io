<template>
  <div
    class="chat-container dashboard-item-container"
    @click="dialogVisible = !dialogVisible"
    title="chat"
  >
    <img src="@/assets/svg/aibot.svg" alt="" />
  </div>
  <self-dialog v-model:show="dialogVisible">
    <iframe src="https://chat18.aichatos8.xyz/#/" frameborder="0"></iframe>
  </self-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style scoped lang="scss">
.chat-container {
  background-color: #0ea27e;

  img {
    width: 100%;
    height: 100%;
  }
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
