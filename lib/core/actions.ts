/*
 * @Author: Waly
 * @Date: 2022-04-10 21:11:35
 * @LastEditors: Waly
 * @LastEditTime: 2022-04-11 14:59:38
 * @Description: 请填写简介
 */
import fs from 'fs'
import path from 'path'
import { vueTemplateV2, vueTemplateV3, storeTemplate, routerTemplate } from '../template/fileTemplate';
const fileInfoMap = {
  v2: {
    template: vueTemplateV2,
    suffix: '.vue'
  },
  v3: {
    template: vueTemplateV3,
    suffix: '.vue'
  },
  s: {
    template: storeTemplate,
    suffix: '.ts'
  },
  r: {
    template: routerTemplate,
    suffix: '.ts'
  }

}
type templateType = 'v2' | 'v3' | 's' | 'r'
function createFile(dirpath: string, fileName: string, type: templateType) {
  const filePath = path.resolve(dirpath, fileName)
  const fileSuffix = fileInfoMap[type]['suffix']
  if (fs.existsSync(dirpath)) {
    console.log('文件已存在');
  } else {
    fs.mkdirSync(dirpath)
    fs.writeFileSync(filePath + fileSuffix, fileInfoMap[type]['template'](fileName))
  }
}
// 在views中创建vue3模板文件
export function createVue3Template(fileName: string) {
  const dirPath = path.resolve('src/views', fileName)
  createFile(dirPath, fileName, 'v3')
}

// 在views中创建vue2模板文件
export function createVue2Template(fileName: string) {
  const dirPath = path.resolve('src/views', fileName)
  createFile(dirPath, fileName, 'v2')
}

// 在store中创建vuex模板文件
export function createStoreTemplate(fileName: string) {
  const dirPath = path.resolve('src/store', fileName)
  createFile(dirPath, fileName, 's')
}

// 在router中创建路由模板文件
export function createRouterTemplate(fileName: string) {
  const dirPath = path.resolve('src/router', fileName)
  createFile(dirPath, fileName, 'r')
}

export function createAll(fileName: string) {
  createVue3Template(fileName)
  createStoreTemplate(fileName)
  createRouterTemplate(fileName)
}