<template>
  <div class="common-layout display-flex">
    <el-container>
      <el-header>
        <j-header :hander="hander" :active="activeHander" @change-hander="changeHander"></j-header>
      </el-header>
      <el-container class="common-main">
        <el-aside v-if="route.meta.isShowSub" width="260px">
          <j-aside :nav="nav"></j-aside>
        </el-aside>
        <el-main>
          <el-scrollbar height="100%">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import JHeader from './components/hander.vue'
import JAside from './components/aside.vue'
import { useRoute, useRouter, type RouteRecordNormalized } from 'vue-router'

const route = useRoute()
const router = useRouter()
const nav = ref<RouteRecordNormalized[]>([])
const hander = ref(router.getRoutes().filter((item) => item.meta.index === 1))

const activeHander = ref('/layout/dashboard')

watch(
  () => route,
  (val) => {
    activeHander.value = val.meta.group as string
    nav.value = router.getRoutes().filter((item) => item.meta.group === val.meta.group)
  },
  {
    deep: true,
    immediate: true
  }
)

const changeHander = (path: string) => {
  router.push({ path })
}
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  background-color: var(--bg-02);
  transition: all 0.2s;

  .common-main {
    overflow: hidden;
    padding: 20px;
  }

  .el-header {
    --el-header-height: 70px;

    background-color: var(--bg-01);
    transition: all 0.2s;
  }

  .el-aside {
    margin-right: 20px;
    background-color: var(--bg-01);
    transition: all 0.2s;
  }

  .el-main {
    background-color: var(--bg-01);
    transition: all 0.2s;

    &:hover {
      width: 100px;
    }
  }
}
</style>
