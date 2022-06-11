/**
 * Time:2022/3/23 14:11 18
 * Name:第一个nodejs.js
 * Path:node js/day 01
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// require函数 用于引入外部的模板，参数为模板名称或路径
const fs = require('fs');

// 读取文件
// 参数一 要读取·文件的路径
// fs.readFile('./zz.html', function (err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.toString());
// 	}
// });

// 写入文件 创建文件  替换文件
// 参数1：文件地址
// 参数2： 要写入的内容
// 参数3：完成的回调函数

// fs.writeFile('./a.txt','abc',function (err) {
//     if (!err){
// 	    console.log('写入成功');
//     } else {
// 			console.log(err);
//     }
// })

// 重命名
// 参数1： 文件路径
// 参数2： 新的文件路径
// fs.rename('./a.txt','../b.txt',function (err) {
//     if (!err){
// 	    console.log('修改成功');
//     } else {
// 	    console.log(err);
//     }
// })

// 删除文件
// 参数1：
// fs.unlink('./a.txt', function (err) {
//     if (!err){
// 			console.log("删除文件");
//     } else {
// 			console.log(err);
//     }
// })

// 检查文件是否存在
// fs.exists('./b.txt',function (has) {
//     if (has){
// 			console.log("存在");
//     } else {
// 			console.log("不存在");
//     }
// });


// 创建目录
// fs.mkdir('./新目录',function (err) {
//     if (!err){
// 			console.log("新建成功");
//     } else{
// 			console.log(err);
//     }
// })


// 删除目录
fs.rmdir('./新目录',function (err) {
	if (!err){
		console.log("删除成功");
	} else{
		console.log(err);
	}
})
