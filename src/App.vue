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
import { I18n } from 'lunar-typescript'
// 因 lunar-typescript 目前只支持中文简体和部分英文所以日历部分不支持国际化翻译
const langStore = useLangStore()
const langComputed = computed(() => {
  switch (langStore.lang) {
    case 'zh_CN':
      I18n.setLanguage('chs')
      return zh_CN
    case 'zh_hant':
      I18n.setLanguage('zh_hant')
      return zh_hant
    case 'en_US':
      I18n.setLanguage('en')
      return en_US
    case 'ko':
      I18n.setLanguage('ko')
      return ko
    default:
      I18n.setLanguage('chs')
      return zh_CN
  }
})
</script>
