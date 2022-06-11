/**
 * Time:2022/4/9 16:36 11
 * Name:mian.js
 * Path:src
 * ProjectName:zxc
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import Vue from 'vue';
import App from '@/App';
import { mixin } from '@/mixin';

Vue.config.productionTip = false;
// Vue.mixin(mixin);

new Vue({
	el: '#app',
	render: h => h(App),
});
