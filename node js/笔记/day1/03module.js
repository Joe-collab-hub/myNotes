/**
 * Time:2022/3/24 15:53 33
 * Name:03module.js
 * Path:node js/笔记/day1
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let a = 10;

/*
	在node中有一个全局对象 global，他的作用和网页中window类似
		在全局中创建的变量都会作为global的属性保存
		在全局中创建的函数都会作为global的方法保存
		
	当node在执行模块中的代码时，他会首先在代码的最顶端，添加如下代码
		function (exports, require, module, __filename, __dirname) {
		
	在代码的最底部，添加如下代码
		}
		
	实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参
		exports
			- 该对象用来将变量或函数暴露到外部
			
		require
			- 函数，引入外部模块
			
		module
			- module代表是当前模块本身
			- exports就是module的属性
			- 既可以使用 exports 导出，也可以使用 module.exports导出
			
		__filename
			D:\前端\node js\笔记\day1\03module.js
			- 当前模块的完整路径
			
		__dirname
			D:\前端\node js\笔记\day1
			- 当前模块所在文件夹的路径
 */

// console.log(global.a);

/*
	arguments.callee
		- 这个属性保存的是当前执行的函数对象
 */
// console.log(arguments.callee + '');

// console.log(module.exports === exports);

// console.log(__filename);

console.log(__dirname);
