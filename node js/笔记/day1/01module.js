/**
 * Time:2022/3/24 13:33 58
 * Name:01module.js
 * Path:node js/笔记/day1
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入其他模块
/*
	在node中，通过require()函数来引入外部的模块
		require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部文件
		这里的路径，如果使用相对路径，必须以 ./ 或 ../开头
		
	使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
	
	我们使用require()引入外部文件时，使用的就是模块标识，我们可以通过标识找到指定的模块
		- 模块分为两大类
			- 核心模块
				- 由node引擎提供的模块
				- 核心模块的标识就是，模块的名字
			文件模块
				- 由用户自己创建的模块
				- 文件模块的标识就是文件的路径（绝对路径，相对路径）
					相对路径使用 ./ 或 ../
*/

let md = require('./02module.js')
let fs = require('fs')

console.log(md);
console.log(fs);
