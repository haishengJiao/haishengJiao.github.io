import { createRouter, createWebHistory } from 'vue-router'
import { useThemeStore } from '@/stores'
import Home from '@/views/home/index.vue'
import dashboard from './dashboard'
import vue from './vue'
import css from './css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/layout',
      name: 'layout',
      redirect: '/layout/dashboard',
      component: () => import('@/views/layout/index.vue'),
      children: [dashboard, ...vue, ...css]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!from.name && from.path === '/') {
    const themeStore = useThemeStore()
    const themeColor = localStorage.getItem('THEME_COLOR')
    const hoverColor = localStorage.getItem('HOVER_COLOR')
    const theme = localStorage.getItem('THEME')
    themeStore.toggleThemeColor(themeColor ? themeColor : '#E64C65')
    themeStore.toggleHoverColor(hoverColor ? hoverColor : '#CA4359')
    themeStore.toggleTheme(theme ? theme : 'light')
  }
  next()
})

export default router
