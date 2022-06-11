/**
 * Time:2022/5/1 16:50 26
 * Name:setupProxy.js
 * Path:src
 * ProjectName:react脚手架
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(proxy('/api', {
		target: 'http://localhost:5000',
		changeOrigin: true,
		pathRewrite: {
			'^/api': ''
		}
	}));
};
