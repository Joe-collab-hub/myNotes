/**
 * Time:2022/5/1 15:55 29
 * Name:setupProxy.js
 * Path:src
 * ProjectName:react脚手架
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const Proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
			Proxy('/api', { // 遇见/api开头的请求，就会触发代理
				target: 'http://localhost:5000', // 代理目标地址
				changeOrigin: true, // 是否跨域  控制服务器收到的请求头中Host的值
				pathRewrite: { '^/api': '', }, // 路径重写
			}),
			Proxy('/auth', {
				target: 'http://localhost:5001',
				changeOrigin: true,
				pathRewrite: {
					'^/auth': '',
				},
			}),
	);
};
