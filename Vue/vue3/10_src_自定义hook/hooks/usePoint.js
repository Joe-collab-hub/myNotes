/**
 * Time:2022/4/24 17:19 08
 * Name:usePoint.js
 * Path:src/hooks
 * ProjectName:vue3
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import { reactive, onMounted, onBeforeUnmount } from 'vue';

export default function () {
	// 实现鼠标'打点'相关的数据
	let point = reactive({
		x: 0,
		y: 0,
	});
	
	// 实现鼠标'打点'相关的方法
	function savePoint (e) {
		point.x = e.clientX;
		point.y = e.clientY;
		console.log(point.x, point.y);
	}
	
	// 实现鼠标'打点'相关的生命周期钩子
	onMounted(() => {
		window.addEventListener('click', savePoint);
	});
	onBeforeUnmount(() => {
		window.removeEventListener('click', savePoint);
	});
	
	return point;
}
