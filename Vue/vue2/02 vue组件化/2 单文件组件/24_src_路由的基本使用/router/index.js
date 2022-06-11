/**
 * Time:2022/4/15 12:47 51
 * Name:index.js
 * Path:Vue/02 vue组件化/2 单文件组件/src/router
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

// 引入组件
import Home from '@/pages/Home';
import About from '@/pages/About';

// 创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path: '/about',
			component: About,
		},
		{
			path: '/home',
			component: Home,
		},
	],
});
