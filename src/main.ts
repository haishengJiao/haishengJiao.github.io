import { createApp } from 'vue'
import piniaStore from '@/stores'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/index.scss'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(piniaStore).use(router)
app.mount('#app')
