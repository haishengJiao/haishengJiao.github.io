<template>
  <div class="dashboard-container display-flex flex-align flex-wrap">
    <memo></memo>
    <chat-ai></chat-ai>
  </div>
</template>

<script setup lang="ts">
import Memo from './Memo/index.vue'
import ChatAi from './ChatGPT/index.vue'
</script>

<style scoped lang="scss">
.dashboard-container {
  overflow: hidden;
  padding: 10px;
  gap: 20px;
}
</style>
