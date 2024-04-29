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
    <div class="nav-right display-flex flex-align">
      <div class="theme-container">
        <el-switch v-model="theme" active-value="dark" inactive-value="light" @change="changeTheme">
          <template #active-action>
            <i class="iconfont icon-dark"></i>
          </template>
          <template #inactive-action>
            <i class="iconfont icon-liangse"></i>
          </template>
        </el-switch>
      </div>
      <div class="full-screen-container">
        <i
          class="iconfont"
          :class="[isFullscreen ? 'icon-quxiaoquanping-o' : 'icon-quanping-o']"
          @click="toggleFullScreen"
        ></i>
      </div>
      <div class="i18n-container">
        <el-dropdown @command="changeLang" trigger="click" popper-class="i18n-dropdown">
          <i class="iconfont icon-shuyi-fanyi-36"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                class="active"
                v-for="item in i18nList"
                :key="item.value"
                :command="item.value"
              >
                {{ item.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'
import { useThemeStore } from '@/stores'
import { useScreenfull } from '@/hooks/screenfull'
import { useLangStore } from '@/stores'
import { type Lnag } from '@/stores/modules/lang'

defineProps({
  hander: { type: Object as PropType<RouteRecordNormalized[]>, default: () => ({}) },
  active: { type: String, default: '' }
})
const emit = defineEmits(['changeHander'])

const themeStore = useThemeStore()
const { isFullscreen, toggleFullScreen } = useScreenfull()
const { langList, handleChangeLang, lang } = useLangStore()

const handleNav = (path: string) => {
  emit('changeHander', path)
}

const theme = ref(themeStore.theme)
const changeTheme = (val: string | boolean | number) => {
  if (typeof val === 'string') themeStore.toggleTheme(val)
}

const i18nList = computed(() => {
  return langList.filter((item) => item.value !== lang)
})

const changeLang = (val: Lnag) => {
  handleChangeLang(val)
  location.reload()
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

  .nav-right {
    gap: 20px;

    .theme-container {
      :deep(.el-switch__core) {
        --el-switch-on-color: var(--bg-09);
        --el-switch-off-color: var(--bg-09);
        --el-switch-border-color: var(--bd-01);
      }

      :deep(.el-switch__action) {
        background-color: transparent;
      }

      .icon-dark {
        color: #cfd3dc;
      }

      .icon-liangse {
        color: #606266;
      }
    }

    .full-screen-container,
    .i18n-container {
      .iconfont {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
