<template>
  <div class="theme-container">
    <div class="display-flex flex-align margin-bottom-20">
      <div>{{ $t('theme.setMainColor') }}：</div>
      <el-color-picker :model-value="themeColor" @active-change="changeTheme" />
    </div>
    <div class="display-flex flex-align margin-bottom-20">
      <div>{{ $t('theme.setHoverColor') }}：</div>
      <el-color-picker :model-value="hoverColor" @active-change="changeHover" />
    </div>
    <el-button type="primary" @click="handleReset">{{ $t('theme.resDefault') }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()

const themeColor = ref(themeStore.themeColor)
const hoverColor = ref(themeStore.hoverColor)

watch(
  () => themeStore.themeColor,
  (val) => {
    themeColor.value = val
  }
)

watch(
  () => themeStore.hoverColor,
  (val) => {
    hoverColor.value = val
  }
)

const changeTheme = (val: string | null) => {
  if (!val) return
  themeStore.toggleThemeColor(val)
}

const changeHover = (val: string | null) => {
  if (!val) return
  themeStore.toggleHoverColor(val)
}

const handleReset = () => {
  themeStore.toggleThemeColor('#E64C65')
  themeStore.toggleHoverColor('#CA4359')
}
</script>

<style scoped lang="scss">
.theme-container {
  .margin-bottom-20 {
    margin-bottom: 20px;
  }
}
</style>
