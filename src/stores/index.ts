import { createPinia } from 'pinia'
import { useThemeStore } from './modules/theme'
import { useLangStore } from './modules/lang'

const store = createPinia()

export { useThemeStore, useLangStore }
export default store
