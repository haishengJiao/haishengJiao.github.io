import i18n from '@/lang'
const { t } = i18n.global

export default [
  {
    path: 'css',
    name: 'css',
    component: () => import('@/views/css/index.vue'),
    meta: {
      title: t('router.css'),
      pageTitle: t('router.css'),
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
      title: 'css2',
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
      title: 'css3',
      index: 2,
      group: 'css',
      isShowSub: true
    }
  }
]
