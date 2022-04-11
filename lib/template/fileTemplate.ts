/*
 * @Author: Waly
 * @Date: 2022-04-10 15:36:08
 * @LastEditors: Waly
 * @LastEditTime: 2022-04-11 15:29:37
 * @Description: 请填写简介
 */
export const vueTemplateV3 = (data: string) => {
  const res = `<template>
  <div class="${data}">
    
  </div>
</template>

<script setup>
import {} from 'vue'
  
</script>

<style lang="scss" scoped>
  
</style>`

  return res
}

export const vueTemplateV2 = (data: string) => {
  const res = `<template>
  <div class="${data}">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ${data} extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
`

  return res
}

export const storeTemplate = (data: string) => {
  const res = `import { Module } from 'vuex'
const ${data}Module: Module<> = {
  namespaced: true,
  state() {
    return {}
  },
  mutations: {},
  actions: {}
}

export default ${data}Module`

  return res
}

export const routerTemplate = (data: string) => {
  const res = `const ${data} = () => import('@/views/main/${data}/${data}.vue')
export default {
  path: '/main/${data}',
  name: '${data}',
  component: ${data},
  children: []
}
`
  return res
}
