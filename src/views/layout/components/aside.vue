<template>
  <div class="aside-container">
    <el-scrollbar height="100%">
      <el-menu :default-active="defaultActive" router class="aside-menu">
        <el-menu-item :index="item.path" v-for="item in nav" :key="item.path">
          <span>{{ getI18nText(item.meta.title) }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { getI18nText } from '@/utils'
import { ref, watch, type PropType } from 'vue'
import { useRoute, type RouteRecordNormalized } from 'vue-router'

defineProps({
  nav: { type: Object as PropType<RouteRecordNormalized[]>, default: () => ({}) }
})

const route = useRoute()
const defaultActive = ref('/layout/vue')

watch(
  () => route,
  (val) => {
    defaultActive.value = val.path
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped lang="scss">
.aside-container {
  padding: 8px 0;
  height: 100%;

  .aside-menu {
    --el-menu-item-height: 40px;

    background-color: transparent;
    transition: all 0.2s;
    border-right: none;

    .el-menu-item {
      padding-left: 30px;

      &:hover {
        color: var(--hover-color);
      }
    }

    .el-menu-item.is-active {
      color: var(--el-menu-text-color);
      background-color: var(--bg-03);

      &::after {
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: var(--theme-color);
        content: ' ';
      }
    }
  }
}
</style>
