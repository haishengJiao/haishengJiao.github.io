import type { RouteRecordRaw } from 'vue-router'

const vue: RouteRecordRaw[] = [
  {
    path: 'vue',
    name: 'vue',
    component: () => import('@/views/vue/index.vue'),
    meta: {
      title: 'router.vue',
      pageTitle: 'router.vue',
      index: 1,
      group: 'vue',
      isShowSub: true
    }
  },
  {
    path: 'theme',
    name: 'theme',
    meta: {
      title: 'router.subjectColor',
      pageTitle: 'router.subjectColor',
      index: 2,
      group: 'vue',
      isShowSub: true
    },
    component: () => import('@/views/vue/theme.vue')
  },
  {
    path: 'vue3',
    name: 'vue3',
    meta: {
      title: 'router.vue3',
      pageTitle: 'router.vue3',
      index: 2,
      group: 'vue',
      isShowSub: true
    },
    component: () => import('@/views/vue/vue3.vue')
  }
]

export default vue
