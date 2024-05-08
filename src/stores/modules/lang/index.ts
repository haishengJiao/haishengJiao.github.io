import { defineStore } from 'pinia'
import { getBrowserLanguage } from '@/lang'
import { encrypt } from '@/utils/crypto'
import i18n from '@/lang'

type LANG = 'zh_hant' | 'zh_CN' | 'en_US' | 'ko'
export type Lnag = LANG | 'auto'

export const useLangStore = defineStore('lang', {
  state: () => ({
    langList: [
      { name: i18n.global.t('lang.auto'), value: 'auto' },
      { name: i18n.global.t('lang.simplifiedChinese'), value: 'zh_CN' },
      { name: i18n.global.t('lang.chineseTraditional'), value: 'zh_hant' },
      { name: i18n.global.t('lang.English'), value: 'en_US' },
      { name: i18n.global.t('lang.korean'), value: 'ko' }
    ],
    lang: 'zh_CN',
    currentLang: 'zh_CN'
  }),
  actions: {
    handleChangeLang(val: Lnag) {
      this.lang = val
      if (val === 'auto') {
        this.currentLang = getBrowserLanguage()
      } else {
        this.currentLang = val
      }
      i18n.global.locale.value = this.currentLang as LANG
      localStorage.setItem(encrypt('LANG'), encrypt(val))
    }
  }
})
