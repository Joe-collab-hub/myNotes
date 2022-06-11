/**
 * Time:2022/4/10 14:58 30
 * Name:plugins.js
 * Path:Vue/02 vue组件化/2 单文件组件/src
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

export default {
	install (Vue,x,y,z) {
		console.log(x,y,z);
		// 全局过滤器
		Vue.filter('mySlice', function (value) {
			return value.slice(0, 4);
		});
		
		// 全局指令
		Vue.directive('fbing', {
			// 指令成功绑定时（一开始）
			bind (element, binding) {
				element.value = binding.value;
			},
			// 指令所在元素被插入页面时
			inserted (element, binding) {
				element.focus();
			},
			// 指令所在的模板被重新解析时调用
			update (element, binding) {
				element.value = binding.value;
			},
		});
		
		// 定义混入
		Vue.mixin({
			data () {
				return {
					x: 12,
					y: 3421,
				};
			},
		});
		
		// 给Vue原型上添加一个方法（vm和vc就都能使用）
		Vue.prototype.hello = () => {alert('你好啊！');};
	},
};
