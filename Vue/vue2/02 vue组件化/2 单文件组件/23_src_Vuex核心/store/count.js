/**
 * Time:2022/4/14 18:37 35
 * Name:count.js
 * Path:Vue/02 vue组件化/2 单文件组件/src/store
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 求和相关的配置
export default {
	namespaced: true,
	actions: {
		jiaOdd (context, value) {
			console.log('actions被jiaOdd调用了', context, value);
			if (context.state.sum % 2) {
				context.commit('JIA', value);
			}
		},
		jiaWait (context, value) {
			console.log('actions被jiaWait调用了', context, value);
			setTimeout(() => {
				context.commit('JIA', value);
			}, 500);
		},
	},
	mutations: {
		JIA (state, value) {
			console.log('mutations中的JIA被调用的');
			state.sum += value;
		},
		JIAN (state, value) {
			console.log('mutations中的JIAN被调用的');
			state.sum -= value;
		},
	},
	state: {
		sum: 0,
		school: '尚硅谷',
		subject: '前端',
	},
	getters: {
		bigSum (state) {
			return state.sum * 10;
		},
	},
};
