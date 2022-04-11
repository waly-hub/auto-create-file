/*
 * @Author: Waly
 * @Date: 2022-04-10 11:18:24
 * @LastEditors: Waly
 * @LastEditTime: 2022-04-11 15:47:20
 * @Description: 请填写简介
 */
import { Command } from 'commander'
const program = new Command()
import { createVue3Template, createVue2Template, createStoreTemplate, createRouterTemplate, createAll } from './actions'
export const createFile = () => {
  program
    .description('在views中创建一个文件夹并在其中创建一个Vue3模板文件')
    .command('addView3 <fileName>')
    .action((fileName) => createVue3Template(fileName))

  program
    .description('在views中创建一个文件夹并在其中创建一个Vue2模板文件')
    .command('addView2 <fileName>')
    .action((fileName) => createVue2Template(fileName))

  program
    .description('在Store中创建一个文件夹并在其中创建一个Vuex模板文件')
    .command('addStore <fileName>')
    .action((fileName) => createStoreTemplate(fileName))

  program
    .description('在Router中创建一个文件夹并在其中创建一个路由模板文件')
    .command('addRouter <fileName>')
    .action((fileName) => createRouterTemplate(fileName))

  program
    .description('在Views、router、store中创建对应文件')
    .command('addAll <fileName>')
    .action((fileName) => createAll(fileName))

  program.parse(process.argv)
}