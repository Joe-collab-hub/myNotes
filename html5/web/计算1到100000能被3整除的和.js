/**
 * Time:2022/3/11 10:59 36
 * Name:计算1到100000能被3整除的和.js
 * Path:html5
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 接受主线程发送的数据
onmessage = function (result) {
	// result: 主线程发送的数据
	console.log('子线程接收的数据', result.data);
	
	let num = 0;
	for (let i = 0; i < 1000000; i++) {
		if (i % 3 === 0) {
			// console.log(i);
			num += i;
		}
	}
// 参数为要发送的数据,参数为要发送的数据;
// postMessage(num);

// 向主线程发送计算结果数据，参数为要发送的数据，支持字符串、数字、数组、对象
	postMessage({
		num: result.date, // 传递过来的值
		result: num,   // 计算的结果
	});
};
// 绑定接收数据事件
// 和 onmessage = function (){}  相同，会被覆盖
// this.onmessage = function (result) {
// 	console.log('使用this.onmessage绑定的', result.data);
// };

addEventListener('message', function (result) {
	console.log('使用addEventListener绑定的', result.data);
	
});

// 子线程中没有document的操作，因此也不能去操作元素，通常只在子线程中计算，然后再传递给主线程操作
// console.log(document);  // 报错
