import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeColor: '',
    hoverColor: ''
  }),
  actions: {
    setThemeColor(color: string) {
      this.themeColor = color
      document.documentElement.style.setProperty('--theme-color', color)
      localStorage.setItem('theme', color)
    },
    setHoverColor(color: string) {
      this.hoverColor = color
      document.documentElement.style.setProperty('--hover-color', color)
      localStorage.setItem('hover', color)
    }
  }
})
