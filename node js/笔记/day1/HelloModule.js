/**
 * Time:2022/3/24 16:15 06
 * Name:HelloModule.js
 * Path:node js/笔记/day1
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
module.exports.name = '孙悟空';
module.exports.age = 10;
module.exports.sayName = function () {
	console.log('孙悟空');
} */

/*
module.exports = {
	name: '猪八戒',
	age: 18,
	sayName: function () {
		console.log('猪八戒');
	},
};
*/

let obj = {};
obj.a = {}
let a = obj.a;
// a 和 obj.a指向的是同一个对象
// console.log(a === obj.a);  //true

a.name = '孙悟空'
a = new Object();

console.log(obj.a.name);
console.log(a.name);
