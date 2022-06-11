import React, { Component } from 'react';
// 引入store 用于获取redux中保存的数据
import store from '../../redux/store';

export default class Count extends Component {
	
	state = { carName: '奔驰' };
	
	/* componentDidMount () {
		// 监测redux中的状态变化，只要变化，就调用render
		store.subscribe (() => {
			this.setState ({});
		});
	} */
	
	// 正常加
	add = () => {
		const { value } = this.selectNumber;
		// 通知redux加value
		store.dispatch ({ type: 'ADD', value: value * 1 });
	};
	
	// 正常减
	subtract = () => {
		const { value } = this.selectNumber;
		// 通知redux减value
		store.dispatch ({ type: 'SUB', value: value * 1 });
	};
	
	// 奇数在加
	oddNumberAdd = () => {
		const { value } = this.selectNumber;
		// 通知redux加value
		const count = store.getState ();
		if (count % 2 === 1) {
			store.dispatch ({ type: 'ADD', value: value * 1 });
		}
	};
	
	// 异步加
	asynchronousAdd = () => {
		const { value } = this.selectNumber;
		// 通知redux加value
		setTimeout (() => {
			store.dispatch ({ type: 'ADD', value: value * 1 });
		}, 500);
	};
	
	render () {
		// const { count } = this.state
		return (
				<div>
					<h1>当前求和为：{store.getState ()}</h1>
					<select ref={c => this.selectNumber = c}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<button onClick={this.add}>+</button>
					<button onClick={this.subtract}>-</button>
					<button onClick={this.oddNumberAdd}>当前求和为奇数再加</button>
					<button onClick={this.asynchronousAdd}>异步加</button>
				</div>
		);
	}
	
}
