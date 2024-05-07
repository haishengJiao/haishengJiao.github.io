import { v4 } from 'uuid'

/**
 * 设置网页标题
 * @param title 标题
 */
export const setPageTitle = (title: string) => {
  document.title = title
}

/**
 * 生成唯一ID
 * @returns 唯一id
 */
export const generateUniqueId = (): string => {
  return v4()
}
