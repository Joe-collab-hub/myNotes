/**
 * Time:2022/4/9 11:04 55
 * Name:main.js
 * Path:Vue/02 vue组件化/02 单文件组件
 * ProjectName:前端
 * Author:突然
 * 11
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
	关于不同版本的Vue
		1、vue.js 与 vue.runtime.xxx.js 区别
			1、vue.js是完整版的Vue，包含：核心功能+模板解析器
			2、vue.runtime.xxx.js是运行版的Vue，只包含：核心功能：没有模板解析器
		2、因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数收到的 createElement 函数去指定具体内容
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

const vm = new Vue({
	el: '#app',
	// render: h => h(App),
	render: (createElement) => {
		return createElement('h1', '你好啊');
	},
});

// new Vue({
// 	el: '#root',
// 	methods: {},
// 	template:'<App></App>',
// 	components: { App },
//
// });

