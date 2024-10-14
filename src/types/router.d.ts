import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 标题
    pageTitle?: string // 网页标题
    index?: number // 层级
    group?: string // 分组
    isShowSub?: boolean // 是否显示侧边栏
  }
}
