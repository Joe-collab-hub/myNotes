/*
 该文件专门为创建action的函数提供一个接口
 */

import { ADD, SUB } from './constant';
// 同步action，就是action的值为Object类型的一般对象
export const createAddAction = value => ({ type: ADD, value });
export const createSubAction = value => ({ type: SUB, value });

// 异步action，就是action的值为函数，异步action中一般都会调用同步action ，异步action不是必须要用的
export const createAddAsyncAction = (value) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(createAddAction(value));
		}, 1000);
		
	}
};
