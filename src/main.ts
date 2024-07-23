import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//全部导入,因为我现在似乎并不在乎文件大小,hh
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(ElementPlus)

app.use(ElementPlus, { size: 'large', zIndex: 3000 }) //设置尺寸和弹出组件层级

app.mount('#app')
