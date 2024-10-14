import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useThemeStore, useLangStore } from '@/stores'
import { getStorageLanguage } from '@/lang'
import { setPageTitle } from '@/utils'
import { encrypt, decrypt } from '@/utils/crypto'
import Home from '@/views/home/index.vue'
import dashboard from './dashboard'
import vue from './vue'
import css from './css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        pageTitle: 'router.home'
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
  NProgress.start()
  if (!from.name && from.path === '/') {
    const themeStore = useThemeStore()
    const themeColor = localStorage.getItem(encrypt('THEME_COLOR'))
    const hoverColor = localStorage.getItem(encrypt('HOVER_COLOR'))
    const theme = localStorage.getItem(encrypt('THEME'))
    themeStore.toggleThemeColor(themeColor ? decrypt(themeColor) : '#E64C65')
    themeStore.toggleHoverColor(hoverColor ? decrypt(hoverColor) : '#CA4359')
    themeStore.toggleTheme(theme ? decrypt(theme) : 'light')

    const langStore = useLangStore()
    langStore.handleChangeLang(getStorageLanguage())
  }
  setPageTitle(to.meta.pageTitle as string)
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
