/**
 * Time:2022/2/23 17:28 08
 * Name:封装cookie函数.js
 * Path:js/测试/jquery
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

function cookie (k, v) {
	if (k === undefined) {
		let obj = {};
		document.cookie.split('; ').forEach(function (val) {
			obj[v.split('=')[0]] = v.split('=')[1];
		});
	} else if (v === undefined) {
		document.cookie.split('; ').forEach(function (val) {
			if (val.split('=')[0] === k) {
				console.log(val.split('=')[1]);
			}
		});
	} else {
		document.cookie = k + '=' + v;
	}
}
