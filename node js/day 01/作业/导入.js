/**
 * Time:2022/3/23 21:44 08
 * Name:导入.js
 * Path:node js/day 01/作业
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const stringApi = require('./字符串api.js')

let str = "   Hello world, welcome to the Runoob   ";

console.log(stringApi.startsWith(str,'Hello',1));
console.log(stringApi.includes(str,'world',10));
console.log(stringApi.indexOf(str,'welcome',2));
console.log(stringApi.trim(str));
