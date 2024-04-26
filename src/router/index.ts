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
    const themeColor = useThemeStore()
    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : '#E64C65'
    const hover = localStorage.getItem('hover') ? localStorage.getItem('hover') : '#CA4359'
    themeColor.setThemeColor(theme as string)
    themeColor.setHoverColor(hover as string)
  }
  next()
})

export default router
