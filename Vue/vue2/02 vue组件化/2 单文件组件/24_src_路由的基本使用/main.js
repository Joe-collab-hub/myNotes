/**
 * Time:2022/4/9 11:04 55
 * Name:main.js
 * Path:Vue/02 vue组件化/02 单文件组件
 * ProjectName:前端
 * Author:突然
 * 11
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App';
// 引入Vue-router插件
import VueRouter from 'vue-router';
import router from './router'
// 关闭Vue的生产提示
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter);

const vm = new Vue({
	el: '#app',
	render: h => h(App),
	router: router,
});


