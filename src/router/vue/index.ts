import i18n from '@/lang'
const { t } = i18n.global

export default [
  {
    path: 'vue',
    name: 'vue',
    component: () => import('@/views/vue/index.vue'),
    meta: {
      title: t('router.vue'),
      pageTitle: t('router.vue'),
      index: 1,
      group: 'vue',
      isShowSub: true
    }
  },
  {
    path: 'theme',
    name: 'theme',
    meta: {
      title: t('router.subjectColor'),
      pageTitle: t('router.subjectColor'),
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
      title: 'vue3',
      index: 2,
      group: 'vue',
      isShowSub: true
    },
    component: () => import('@/views/vue/vue3.vue')
  }
]
