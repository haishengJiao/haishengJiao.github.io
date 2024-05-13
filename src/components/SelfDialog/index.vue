<template>
  <el-dialog
    v-model="dialogVisible"
    :width="isFullScreen ? '100%' : '1000'"
    align-center
    draggable
    :show-close="false"
    class="self-dialog"
    :style="{ height: isFullScreen ? '100%' : '64%', 'min-height': '450px' }"
    :before-close="handleClose"
  >
    <div class="operation display-flex flex-align">
      <div
        class="icon display-flex flex-align flex-justify"
        @click="handleFullScreen"
        :title="isFullScreen ? $t('public.lessen') : $t('public.magnify')"
      >
        <i class="iconfont" :class="[isFullScreen ? 'icon-suoxiao' : 'icon-kuoda']"></i>
      </div>
      <div
        class="icon display-flex flex-align flex-justify"
        @click="handleClose"
        :title="$t('public.close')"
      >
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <slot name="default"></slot>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show'])

watch(
  () => props.show,
  (val) => {
    dialogVisible.value = val
  }
)

const dialogVisible = ref(false)
const isFullScreen = ref(false)

const handleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value
}

const handleClose = () => {
  emit('update:show', false)
}
</script>

<style scoped lang="scss">
.operation {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 12px 12px 0;
  gap: 6px;

  .icon {
    width: 20px;
    height: 20px;
    background-color: #00000029;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    .iconfont {
      font-size: 12px;
      color: #fff;
      font-weight: bold;
    }

    &:hover {
      background-color: var(--hover-color);
    }
  }
}
</style>
