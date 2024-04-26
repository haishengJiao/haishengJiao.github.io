export default {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    title: '首页',
    index: 1,
    group: 'dashboard',
    isShowSub: false
  }
}
