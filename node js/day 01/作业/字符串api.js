/**
 * Time:2022/3/23 19:06 57
 * Name:字符串api.js
 * Path:node js/day 01
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


function startsWith (str, searchvalue, start) {
	if (start === undefined) start = 0;
	for (let i = start; i < str.length; i++) {
		let index = '';
		for (let j = 0; j < searchvalue.length; j++) {
			index += str[i + j];
		}
		if (searchvalue === index) {
			return true;
		}
	}
	return false;
}

exports.startsWith = startsWith;

function includes (str, searchvalue, start) {
	if (start === undefined) start = 0;
	for (let i = start; i < str.length; i++) {
		let index = '';
		for (let j = 0; j < searchvalue.length; j++) {
			index += str[i + j];
		}
		if (searchvalue === index) {
			return true;
		}
	}
	return false;
}

exports.includes = includes;

function indexOf (str, searchvalue, start) {start
	if (start === undefined) start = 0;
	for (let i = start; i < str.length; i++) {
		let index = '';
		for (let j = 0; j < searchvalue.length; j++) {
			index += str[i + j];
		}
		if (searchvalue === index) {
			return i;
		}
	}
	return -1;
}

exports.indexOf = indexOf;

function trim (str) {
	let a = /^\s+|\s+$/gm;
	return str.replace(a, '');
}

exports.trim = trim;

module.exports = {
	startsWith: startsWith,
	includes: includes,
	indexOf: indexOf,
	trim: trim,
};
