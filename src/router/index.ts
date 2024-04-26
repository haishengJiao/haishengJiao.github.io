import { createRouter, createWebHistory } from 'vue-router'
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

export default router
