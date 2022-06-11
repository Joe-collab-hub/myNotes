/*
 该文件专门为创建action的函数提供一个接口
 */

import { ADD, SUB } from './constant';

export const createAddAction = value => ({ type: ADD, value });
export const createSubAction = value => ({ type: SUB, value });


