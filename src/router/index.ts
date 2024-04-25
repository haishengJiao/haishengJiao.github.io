import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout/index.vue')
    }
  ]
})

export default router
