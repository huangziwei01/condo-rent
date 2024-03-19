import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import 'normalize.css/normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入element-plus的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

import router from './router/index'
// 全局设置路由跳转回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
app.use(router)

app.mount('#app')
