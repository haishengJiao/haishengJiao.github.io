import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useThemeStore, useLangStore } from '@/stores'
import { getStorageLanguage } from '@/lang'
import i18n from '@/lang'
const { t } = i18n.global
import { setPageTitle } from '@/utils'
import Home from '@/views/home/index.vue'
import dashboard from './dashboard'
import vue from './vue'
import css from './css'

console.log(import.meta.env.BASE_URL, '2')

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        pageTitle: t('router.home')
      }
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

    const langStore = useLangStore()
    langStore.handleChangeLang(getStorageLanguage())
  }
  setPageTitle(to.meta.pageTitle as string)
  next()
})

export default router
