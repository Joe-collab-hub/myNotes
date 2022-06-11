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
import Vuex from 'vuex';

import countOptions from './count'
import personOptions from './person'
// 使用vuex插件
Vue.use(Vuex);




// 创建并暴露store
export default new Vuex.Store({
	modules: {
		countOptions,
		personOptions
	},
	
});
