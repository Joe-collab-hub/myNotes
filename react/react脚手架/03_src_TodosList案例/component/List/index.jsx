import React, { Component } from 'react';
import './index.css';

import Item from '../Item';

export default class List extends Component {
	
	render () {
		const { todos, updateTodo } = this.props;
		return (
				<ul className="todo-main">
					{
						todos.map((item) => {
							return <Item key={item.id} todo={item} updateTodo={updateTodo}/>;
						})
					}
				</ul>
		);
	}
	
}
