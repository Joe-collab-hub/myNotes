/**
 * Time:2022/3/24 16:14 26
 * Name:04module.js
 * Path:node js/笔记/day1
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let hello = require('./HelloModule.js')

/*
	exports 和 module.exports
		- 通过 exports 只能使用 . 的方式来向外暴露内部变量
			exports.xxx = xxx
		
		- 而 module.exports 既可以通过 . 的形式，也可以直接赋值
			module.exports.xxx = xxx
			module.exports = {}
 */

console.log(hello.name);
console.log(hello.age);
hello.sayName()
