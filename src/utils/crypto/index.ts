import CryptoJS from 'crypto-js'
const key = CryptoJS.enc.Utf8.parse('123456789asdfghj') // 密钥
const iv = CryptoJS.enc.Utf8.parse('asdfghj123456789') // 偏移量
/**
 * AES加密 ：字符串 key iv  返回base64
 */
export function encrypt(word: string) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *  */
export function decrypt(word: string) {
  const base64 = CryptoJS.enc.Base64.parse(word)

  const src = CryptoJS.enc.Base64.stringify(base64)

  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  return CryptoJS.enc.Utf8.stringify(decrypt)
}
