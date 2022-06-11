/**
 * Time:2022/3/28 18:52 48
 * Name:3.28作业.js
 * Path:node js/day 01/作业
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

Array.prototype.myJoin = function (separator) {
	let str = '';
	if (separator === undefined) separator = ',';
	for (let i = 0; i < this.length; i++) {
		str += this[i];
		if (i < this.length - 1) {
			str += separator;
		}
	}
	return str;
};
let arr = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(arr.myJoin(' and '));

String.prototype.mySplit = function (separator, limit) {
	let arr = [];
	if (separator === undefined) {
		arr.push(this);
	} else {
		let str = '';
		let str1 = '';
		for (let i = 0; i < this.length; i++) {
			if (separator === '') {
				arr.push(this[i]);
			} else {
				if (separator === this[i]) {
					arr.push(str);
					str = '';
				} else if (separator[0] === this[i]) {
					for (let j = 0; j < separator.length; j++) {
						str1 += this[i + j];
					}
					
					if (separator === str1) {
						arr.push(str);
						str = '';
						str1 = '';
						i += separator.length - 1;
					}
				} else {
					str += this[i];
				}
			}
		}
		arr.push(str);
	}
	return arr;
};
let str = 'Hello,can,I,help,you';

// console.log(str.mySplit('ca'));

