import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
	
	// 是否全勾选
	handleCheckAll = (e) => {
		this.props.checkdAllTodo(e.target.checked);
	};
	
	// 清除以完成
	handleClearAllDone=() => {
	  this.props.clearAllDone();
	}
	
	render () {
		const { todos } = this.props;
		// 一完成的todo数量
		const doneTodos = todos.reduce((per, todo) => per + (todo.dome ? 1 : 0), 0);
		
		return (
				<div className="todo-footer">
					<label>
						<input type="checkbox" onChange={this.handleCheckAll}
						       checked={doneTodos === todos.length && todos.length !== 0}/>
					</label>
					<span><span>已完成{doneTodos}</span> / 全部{todos.length}</span>
					<button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
				</div>
		);
	}
	
}
