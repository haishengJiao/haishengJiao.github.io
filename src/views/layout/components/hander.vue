<template>
  <div class="header-container display-flex flex-align flex-justify-between">
    <div>1</div>
    <div class="nav-container">
      <ul class="display-flex">
        <li
          :class="{ active: item.meta?.group === active }"
          v-for="item in hander"
          :key="item.path"
          @click="handleNav(item.path)"
        >
          {{ item.meta?.title }}
        </li>
      </ul>
    </div>
    <div>开关开关开关开关</div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'

defineProps({
  hander: { type: Object as PropType<RouteRecordNormalized[]>, default: () => ({}) },
  active: { type: String, default: '' }
})

const emit = defineEmits(['changeHander'])

const handleNav = (path: string) => {
  emit('changeHander', path)
}
</script>

<style scoped lang="scss">
.header-container {
  height: 100%;

  .nav-container {
    ul li {
      position: relative;
      padding: 0 22px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: var(--hover-color);
      }
    }

    ul .active::after {
      position: absolute;
      bottom: -10px;
      left: 50%;
      display: inline-block;
      width: 20px;
      height: 4px;
      background-color: var(--theme-color);
      border-radius: 2px;
      content: ' ';
      transform: translateX(-50%);
    }
  }
}
</style>
