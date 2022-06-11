/**
 * Time:2022/4/9 16:36 11
 * Name:mian.js
 * Path:src
 * ProjectName:zxc
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
// 引入Vue
import Vue from 'vue';
// 引入App
import App from '@/App';
// 引入store
import store from './store';

Vue.config.productionTip = false;
// 使用插件

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	beforeCreate () {
		Vue.prototype.$bus = this;
	},
});
