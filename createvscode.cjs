/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

// 创建 .vscode 文件夹
const vscodeFolderPath = path.join(__dirname, '.vscode')
if (!fs.existsSync(vscodeFolderPath)) {
  fs.mkdirSync(vscodeFolderPath)

  // 创建 extensions.json 文件并写入内容
  const extensionsJsonPath = path.join(vscodeFolderPath, 'extensions.json')
  const extensionsJsonContent = `{
  "recommendations": [
    "Vue.volar",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}`
  fs.writeFileSync(extensionsJsonPath, extensionsJsonContent)

  // 创建 settings.json 文件并写入内容
  const settingsJsonPath = path.join(vscodeFolderPath, 'settings.json')
  const settingsJsonContent = `{
    // 开启自动修复
    "editor.codeActionsOnSave": {
      "source.fixAll": "never",
      "source.fixAll.eslint": "explicit",
      "source.fixAll.stylelint": "explicit"
    },
    // 保存的时候自动格式化
    "editor.formatOnSave": false,
    // 默认格式化工具选择prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 配置该项，新建文件时默认就是space：2
    "editor.tabSize": 2,
    // stylelint校验的文件格式
    "stylelint.validate": ["css", "scss", "sass", "vue", "html"],
    "i18n-ally.localesPaths": ["src/lang"]
}`
  fs.writeFileSync(settingsJsonPath, settingsJsonContent)
  console.log('.vscode 文件夹及其内容已成功创建！')
} else {
  console.log('.vscode 文件夹已存在，无需创建。')
}
