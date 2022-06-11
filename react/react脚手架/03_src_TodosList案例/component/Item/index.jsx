import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {
	
	// 标识鼠标移入、移除
	state = { isEdit: false };
	
	// 限制props类型
	static propTypes = {
		updateTodo: PropTypes.func.isRequired,
		todo: PropTypes.object.isRequired,
	}
	
	// 判断鼠标是否悬停在该元素上回调函数
	handelMove = (bel) => {
		return () => {
			this.setState({ isEdit: bel });
		};
	};
	
	// 勾选、取消勾选或删除的回调函数
	handelCheck = (id) => {
		return (e) => {
			this.props.updateTodo(id, e.target.checked);
		};
	};
	
	render () {
		const { todo } = this.props;
		const { isEdit } = this.state;
		return (
				<li
						style={{ backgroundColor: isEdit ? '#ccc' : '#fff' }}
						onMouseEnter={this.handelMove(true)}
						onMouseLeave={this.handelMove(false)}>
					<label>
						<input type="checkbox" onChange={this.handelCheck(todo.id)} checked={todo.dome}/>
						<span>{todo.title}</span>
					</label>
					
					<button className="btn btn-danger" style={{ display: isEdit ? 'block' : 'none' }} onClick={this.handelCheck(todo.id)}>删除</button>
				</li>
		);
	}
	
}
