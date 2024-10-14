import { v4 } from 'uuid'
import i18n from '@/lang'

/**
 * 设置网页标题
 * @param title 标题
 */
export const setPageTitle = (title: string) => {
  document.title = getI18nText(title)
}

/**
 * 生成唯一ID
 * @returns 唯一id
 */
export const generateUniqueId = (): string => {
  return v4()
}

/**
 * 补零
 * @param num 待填充的数字
 * @returns 返回填充后的字符串
 */
export const padZeroIfNeeded = (num: number): string => {
  return num < 10 ? '0' + num : String(num)
}

/**
 * 获取国际化文本
 * @param key 国际化key
 * @returns 国际化文本
 */
export const getI18nText = (key: string | undefined) => {
  if (!key) return ''
  return i18n.global.t(key)
}
