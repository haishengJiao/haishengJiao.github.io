<template>
  <el-config-provider :locale="langStore.elementLang">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLangStore } from '@/stores'
const langStore = useLangStore()
</script>
