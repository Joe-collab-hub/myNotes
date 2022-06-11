/**
 * Time:2022/5/11 15:15 39
 * Name:02-basls.ts
 * Path:chapter01
 * ProjectName:TypeScript
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 声明一个变量a，同时指定类型为number
let a: number;

// a的类型设置为number，在以后的赋值中，a的值只能是 “数字”
a = 10;
a = -38;
// a = 'hello' // 报错：此行代码会报错，因为变量a的类型是number，但是赋值的是字符串
console.log(a);

let b: string;
b = 'hello';

// 声明完变量后直接赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行，TS可以自动识别变量的类型
let c = true;

c = false;

function func (a: number, b: number): number {
	return a + b;
}
func(1, 2);
