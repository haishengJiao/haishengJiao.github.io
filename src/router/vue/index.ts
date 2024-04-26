// export default {
//   path: 'vue',
//   name: 'vue',
//   redirect: '/layout/vue/vue2',
//   component: () => import('@/views/vue/index.vue'),
//   children: [
//     {
//       path: 'vue2',
//       name: 'vue2',
//       meta: {
//         title: 'vue2'
//       },
//       component: () => import('@/views/vue/vue2.vue')
//     },
//     {
//       path: 'vue3',
//       name: 'vue3',
//       meta: {
//         title: 'vue3'
//       },
//       component: () => import('@/views/vue/vue3.vue')
//     }
//   ],
//   meta: {
//     title: 'vue'
//   }
// }

export default [
  {
    path: 'vue',
    name: 'vue',
    component: () => import('@/views/vue/index.vue'),
    meta: {
      title: 'vue',
      index: 1,
      group: 'vue',
      isShowSub: true
    }
  },
  {
    path: 'theme',
    name: 'theme',
    meta: {
      title: '主题色',
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
