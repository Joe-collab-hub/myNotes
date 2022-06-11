/**
 * Time:2022/4/14 18:37 20
 * Name:person.js
 * Path:Vue/02 vue组件化/2 单文件组件/src/store
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 人员管理相关的配置
import axios from 'axios';
import {nanoid} from 'nanoid';

export default {
	namespaced: true,
	actions: {
		addPersonWang (context, value) {
			if (value.name[0] === '王') {
				context.commit('ADD_PERSON', value);
			} else {
				alert('添加的必须性王');
			}
		},
		addPersonServer(context){
			axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
					(response) => {
					  context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
					},
					(error) => {
					  alert(error.message)
					}
			)
		}
	},
	mutations: {
		ADD_PERSON (state, value) {
			state.personList.push(value);
		},
	},
	state: {
		personList: [{
			id:782364,
			name:'zhangsa'
		}],
	},
	getters: {
		firstPersonName(state){
			console.log(state);
			return state.personList[0].name
		}
	},
};
