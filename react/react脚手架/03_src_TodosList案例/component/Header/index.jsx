import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {
	// 限制props类型
	static propTypes = {
		addTodo: PropTypes.func.isRequired,
	}
	
	handleKeyUp = (e) => {
		const { keyCode, target } = e;
		// 判断是否是回车键
		if (keyCode === 13) {
			// 判断是否有内容
			if (target.value.trim() !== '') {
				// 准备好数据
				let todoObj = { id: nanoid(), title: target.value, done: false };
				// 传给父组件
				this.props.addTodo(todoObj);
				// 清空输入框
				target.value = '';
			}
		}
	};
	
	render () {
		return (
				<div className="todo-header">
					<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
				</div>
		);
	}
	
}
