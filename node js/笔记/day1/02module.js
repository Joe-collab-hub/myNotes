/**
 * Time:2022/3/24 14:30 31
 * Name:02module.js
 * Path:node js/笔记/day1
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/*
	模块化
		- 在node中，一个js文件就是一个模块
		- 在node中，每一个js文件中的js代码都是独立运行在一个函数中
			而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问
 */

console.log('我是一个模块，我是02.module.js');

/*
	我们可以通过 exports 来向外部暴露变量和方法
		只需要将暴露给外部变量或方法设置为 exports 的属性即可
 */

// 向外部暴露属性或方法
exports.x = '我是 02module.js中的x'
exports.y = '我是y'
exports.fn = function () {

}
