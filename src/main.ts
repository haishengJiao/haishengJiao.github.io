import { createApp } from 'vue'
import App from './App.vue'
import piniaStore from '@/stores'
import router from './router'
import i18n from './lang'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/index.scss'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(piniaStore).use(router).use(i18n).mount('#app')
