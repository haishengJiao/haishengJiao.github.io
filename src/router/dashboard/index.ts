import type { RouteRecordRaw } from 'vue-router'

const dashboard: RouteRecordRaw = {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    title: 'router.dashboard',
    pageTitle: 'router.dashboard',
    index: 1,
    group: 'dashboard',
    isShowSub: false
  }
}

export default dashboard
