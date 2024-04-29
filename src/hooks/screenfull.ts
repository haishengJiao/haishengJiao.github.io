import { onMounted, onUnmounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

export function useScreenfull() {
  const { t } = useI18n()
  const isFullscreen = ref(false)

  const toggleFullScreen = async () => {
    const element = document.documentElement
    if (!element.requestFullscreen) {
      ElMessage({
        message: t('home.noFullScreen'),
        type: 'warning'
      })
      return false
    }
    if (isFullscreen.value) {
      await document.exitFullscreen()
    } else {
      await document.documentElement.requestFullscreen()
    }
  }

  const handleFullscreenchange = () => {
    isFullscreen.value = !isFullscreen.value
  }
  const handleDisabledF11 = (event: KeyboardEvent) => {
    if (event.key === 'F11') event.preventDefault()
  }

  onMounted(() => {
    window.addEventListener('fullscreenchange', handleFullscreenchange)
    window.addEventListener('keydown', handleDisabledF11)
  })

  onUnmounted(() => {
    window.removeEventListener('fullscreenchange', handleFullscreenchange)
    window.removeEventListener('keydown', handleDisabledF11)
  })

  return {
    isFullscreen,
    toggleFullScreen
  }
}
