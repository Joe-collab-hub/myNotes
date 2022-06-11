/**
 * Time:2022/4/10 14:07 35
 * Name:mixin.js
 * Path:Vue/02 vue组件化/2 单文件组件/src
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

export const mixin = {
	
	methods: {
		add () {
			alert(this.name);
		},
	},
	mounted () {
		console.log(789);
	},
};

export const mixin2 = {
	data () {
		return {
			x: 12,
			y: 3421,
		};
	},
};
