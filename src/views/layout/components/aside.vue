<template>
  <div class="aside-container">
    <el-scrollbar height="100%">
      <el-menu :default-active="defaultActive" router>
        <el-menu-item :index="item.path" v-for="item in nav" :key="item.path">
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
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
    console.log(val.path)
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

  .el-menu {
    border-right: none;
  }
}
</style>
