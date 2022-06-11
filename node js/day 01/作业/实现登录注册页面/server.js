/**
 * Time:2022/3/24 19:58 58
 * Name:server.js
 * Path:node js/day 01/作业/实现登录注册页面
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let http = require('http');
let url = require('url');
let qs = require('querystring');
let fs = require('fs');

http.createServer(function (req, res) {
	//设置请求头
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (req.method === 'POST') {
		//接收发来的用户名和密码
		let result = '';
		//获取前端代码发来的路由地址
		let pathName = url.parse(req.url).pathname;
		req.addListener('data', function (chunk) {
			result += chunk;
		});
		
		req.on('end', function () {
			let user = qs.parse(result);
			//判断用户是否存在
			if (user.username) {
				fs.readFile('db.txt', 'utf-8', function (err, data) {
					if (!err) {
						if (!data) {
							if (pathName === '/login') {
								res.end('该用户不存在');
								return;
							}
							//根据前端发来的路由地址判断是登录还是注册页面，如果是注册页面
							if (pathName === '/register') {
							//创建一个数组一个对象来保存帐号和密码
								let arr = [];
								let obj = {};
								//把用户的帐号密码保存
								obj.username = user.username;
								obj.password = user.password;
								arr.push(obj);
								//同步写入db.txt文件，必须是同步进行
								fs.writeFileSync('db.txt', JSON.stringify(arr), 'utf-8');
								res.end('注册成功!');
								return;
							}
						} else {
							//把数据转成JSON对象，以便我们使用
							let arr = JSON.parse(data);
							//遍历整个保存数据的数组 判断登录注册
							for (let i = 0; i < arr.length; i++) {
								let obj = arr[i];
								if (obj.username === user.username) {
									if (pathName === '/login') {
										if (obj.password === user.password) {
											res.end('登录成功!');
											return;
										} else {
											res.end('密码错误！');
											return;
										}
									}
									if (pathName === '/register') {
										res.end('该用户已存在!');
										return;
									}
								}
							}
							if (pathName === '/login') {
								res.end('用户名不存在!');
								return;
							}
							if (pathName === '/register') {
								//创建新对象写入数据
								let obj = {};
								obj.username = user.username;
								obj.password = user.password;
								arr.push(obj);
								fs.writeFileSync('db.txt', JSON.stringify(arr), 'utf-8');
								res.end('注册成功!');
								return;
							}
						}
					} else {
						console.log('读取文件失败');
					}
				});
			}
		});
	} else {
		res.end('get请求');
	}
}).listen(3000, function (err) {
	if (!err) {
		console.log('服务器启动成功，正在监听port3000...');
	}
});
