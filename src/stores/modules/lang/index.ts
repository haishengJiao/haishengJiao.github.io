import { defineStore } from 'pinia'
import { getBrowserLanguage } from '@/lang'
import { encrypt } from '@/utils/crypto'
import i18n from '@/lang'
import { I18n as lunarI18n } from 'lunar-typescript'
import zh_CN from 'element-plus/es/locale/lang/zh-cn'
import zh_hant from 'element-plus/es/locale/lang/zh-tw'
import en_US from 'element-plus/es/locale/lang/en'
import ko from 'element-plus/es/locale/lang/ko'

type LANG = 'zh_hant' | 'zh_CN' | 'en_US' | 'ko'
export type Lnag = LANG | 'auto'

export const useLangStore = defineStore('lang', {
  state: () => ({
    langList: [
      { name: 'lang.auto', value: 'auto' },
      { name: 'lang.simplifiedChinese', value: 'zh_CN' },
      { name: 'lang.chineseTraditional', value: 'zh_hant' },
      { name: 'lang.English', value: 'en_US' },
      { name: 'lang.korean', value: 'ko' }
    ],
    lang: 'zh_CN',
    currentLang: 'zh_CN',
    elementLang: zh_CN
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

      // 因 lunar-typescript 目前只支持中文简体和部分英文所以日历部分不支持国际化翻译
      switch (this.currentLang) {
        case 'zh_CN':
          lunarI18n.setLanguage('chs')
          this.elementLang = zh_CN
          break
        case 'zh_hant':
          lunarI18n.setMessages('zh_hant', {})
          lunarI18n.setLanguage('zh_hant')
          this.elementLang = zh_hant
          break
        case 'en_US':
          lunarI18n.setLanguage('en')
          this.elementLang = en_US
          break
        case 'ko':
          lunarI18n.setMessages('ko', {})
          lunarI18n.setLanguage('ko')
          this.elementLang = ko
          break
        default:
          lunarI18n.setLanguage('chs')
          this.elementLang = zh_CN
          break
      }
    }
  }
})
