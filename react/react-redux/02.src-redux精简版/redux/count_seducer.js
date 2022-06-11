/*
 1、该文件是用于创建一个为Count组件的reducer，reducer的本质是一个函数，
 2、reducer函数会接到两个参数，分别为，之前状态（preState），动作状态（action）
 */

const initState = 0;
export default function countReducer (preState = initState, action) {
	console.log ('countReducer', preState, action);
	// 从action对象中获取，type、payload
	const { type, value } = action;
	// 根据type，进行判断如何加工数据
	switch (type) {
		case 'ADD':  // 如果是加
			console.log ('ADD', value);
			return preState + value;
		case 'SUB': // 如果是减
			return preState - value;
		
		default:
			return preState;
	}
	
}
