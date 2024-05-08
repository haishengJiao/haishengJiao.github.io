import * as VueI18n from 'vue-i18n'
import { type Lnag } from '@/stores/modules/lang'
import { encrypt, decrypt } from '@/utils/crypto'
import zh_CN from './package/zn'
import zh_hant from './package/hant'
import en_US from './package/en'
import ko from './package/ko'

export const getBrowserLanguage = (): Lnag => {
  const obj: Record<string, Lnag> = {
    'zh-CN': 'zh_CN',
    ko: 'ko',
    'zh-TW': 'zh_hant',
    'en-US': 'en_US',
    auto: 'auto'
  }
  if (!obj[navigator.language as keyof typeof obj]) {
    return 'zh_CN'
  }
  return obj[navigator.language as keyof typeof obj]
}

export const getStorageLanguage = (): Lnag => {
  const language = localStorage.getItem(encrypt('LANG')) as Lnag
  if (!language) {
    return getBrowserLanguage()
  }
  return decrypt(language) as Lnag
}

const i18n = VueI18n.createI18n({
  legacy: false,
  globalInjection: true,
  locale: getStorageLanguage() === 'auto' ? getBrowserLanguage() : getStorageLanguage(),
  messages: {
    zh_CN: {
      ...zh_CN
    },
    en_US: {
      ...en_US
    },
    zh_hant: {
      ...zh_hant
    },
    ko: {
      ...ko
    }
  }
})

export default i18n
