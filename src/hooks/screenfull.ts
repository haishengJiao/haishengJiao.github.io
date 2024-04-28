import { onMounted, onUnmounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

export function useScreenfull() {
  const isFullscreen = ref(false)

  const toggleFullScreen = async () => {
    const element = document.documentElement
    if (!element.requestFullscreen) {
      ElMessage({
        message: '您的浏览器不支持全屏操作！',
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
