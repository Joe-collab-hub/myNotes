/**
 * Time:2022/4/14 12:10 21
 * Name:index.js
 * Path:Vue/02 vue组件化/2 单文件组件/src/store
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 该文件用于创建Vuex中最为核心的store

// 引入vue核心库

import Vue from 'vue';
// 引入Vuex


// 使用vuex插件
Vue.use(Vuex);
// 准备actions——用于响应组件中的动作
const actions = {
	/* jia (context, value) {
		console.log('actions被jia调用了', context, value);
		context.commit('JIA', value);
	},
	jian (context, value) {
		console.log('actions被jian调用了', context, value);
		context.commit('JIAN', value);
	}, */
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
};
// 准备mutations——用于操作数据（state）
const mutations = {
	JIA (state, value) {
		console.log('mutations中的JIA被调用的');
		state.sum += value;
	},
	JIAN (state, value) {
		console.log('mutations中的JIAN被调用的');
		state.sum -= value;
	},
};
// 准备state——用于存储数据
const state = {
	sum: 0,
	school: '尚硅谷',
	subject:'前端',
};
// 准备state——用于存储数据
const getters = {
	bigSum (state) {
		return state.sum * 10;
	},
};

// 创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
});
