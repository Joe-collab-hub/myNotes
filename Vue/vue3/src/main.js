// 引入的不在是Vue构造函数函数，引入的是一个名为createApp的工厂 函数
import { createApp } from 'vue'
import App from './App.vue'


// const app = createApp(App)
// app.mount('#app')
createApp(App).mount('#app')
