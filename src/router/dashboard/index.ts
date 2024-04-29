import i18n from '@/lang'
const { t } = i18n.global

export default {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    title: t('router.dashboard'),
    pageTitle: t('router.dashboard'),
    index: 1,
    group: 'dashboard',
    isShowSub: false
  }
}
