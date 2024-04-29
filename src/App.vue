<template>
  <el-config-provider :locale="langComputed">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zh_CN from 'element-plus/es/locale/lang/zh-cn'
import zh_hant from 'element-plus/es/locale/lang/zh-tw'
import en_US from 'element-plus/es/locale/lang/en'
import ko from 'element-plus/es/locale/lang/ko'
import { useLangStore } from '@/stores'
import { computed } from 'vue'

const langStore = useLangStore()
const langComputed = computed(() => {
  switch (langStore.lang) {
    case 'zh_CN':
      return zh_CN
    case 'zh_hant':
      return zh_hant
    case 'en_US':
      return en_US
    case 'ko':
      return ko
    default:
      return zh_CN
  }
})
</script>
