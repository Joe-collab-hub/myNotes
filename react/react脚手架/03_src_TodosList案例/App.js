/**
 * Time:2022/4/30 15:38 36
 * Name:App.js
 * Path:src
 * ProjectName:react脚手架
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入react框架
import React, { Component } from 'react';

import './App.css';

// 引入组件
import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';

// 创建暴露组件
export default class App extends Component {
	
	state = {
		todos: [
			{ id: '001', title: '吃饭', dome: true },
			{ id: '002', title: '睡觉', dome: true },
			{ id: '003', title: '打豆豆', dome: false },
		],
	};
	
	// 添加todm
	addTodo = (todo) => {
		// 获取原todos
		const { todos } = this.state;
		// 添加新todo
		const newTodos = [todo, ...todos];
		// 更新状态
		this.setState({
			todos: newTodos,
		});
	};
	
	// 更新或删除todo
	updateTodo = (id, demo) => {
		
		// 获取原todos
		const { todos } = this.state;
		let newTodos = [];
		
		if (demo !== undefined) {
			// 更新todo
			newTodos = todos.map(todo => {
				if (todo.id === id) {
					todo.dome = demo;
				}
				return todo;
			});
		} else {
			// 删除todo
			if (window.confirm('确定删除吗？')) {
				newTodos = todos.filter(todo => todo.id !== id);
			} else {
				newTodos = todos;
			}
			
		}
		
		// 更新状态
		this.setState({
			todos: newTodos,
		});
	};
	
	checkAllTodo = (bol) => {
		// 获取原todos
		const { todos } = this.state;
		// 更新todo
		const newTodos = todos.map(todo => {
			todo.dome = bol;
			return todo;
		});
		// 更新状态
		this.setState({
			todos: newTodos,
		});
	};
	
	// 清除以完成
	clearAllDone = () => {
		// 获取原todos
		const { todos } = this.state;
		// 更新todo
		const newTodos = todos.filter(todo => !todo.dome);
		// 更新状态
		this.setState({
			todos: newTodos,
		});
	};
	
	render () {
		const { todos } = this.state;
		return (<div className="todo-container">
			<div className="todo-wrap">
				<Header addTodo={this.addTodo}/>
				<List todos={todos} updateTodo={this.updateTodo}/>
				<Footer todos={todos} checkdAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
			</div>
		</div>);
	}
}
