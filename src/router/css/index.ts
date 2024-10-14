import type { RouteRecordRaw } from 'vue-router'

const css: RouteRecordRaw[] = [
  {
    path: 'css',
    name: 'css',
    component: () => import('@/views/css/index.vue'),
    meta: {
      title: 'router.css',
      pageTitle: 'router.css',
      index: 1,
      group: 'css',
      isShowSub: true
    }
  },
  {
    path: 'css2',
    name: 'css2',
    component: () => import('@/views/css/css2.vue'),
    meta: {
      title: 'router.css2',
      pageTitle: 'router.css2',
      index: 2,
      group: 'css',
      isShowSub: true
    }
  },
  {
    path: 'css3',
    name: 'css3',
    component: () => import('@/views/css/css3.vue'),
    meta: {
      title: 'router.css3',
      pageTitle: 'router.css3',
      index: 2,
      group: 'css',
      isShowSub: true
    }
  }
]

export default css
