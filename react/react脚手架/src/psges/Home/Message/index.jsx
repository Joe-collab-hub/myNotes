import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {
	
	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' },
		],
	};
	
	render () {
		return (
				<div>
					<ul>
						{
							this.state.messageArr.map((item, index) => {
								return (
										<li key={item.id}>
											{/* 向路由传递params参数 */}
											<Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
											{/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
										</li>
								);
							})
						}
					</ul>
					{/* 声明并接收params参数 */}
					<Route path='/home/message/detail/:id/:title' component={Detail}/>/>
				</div>
		);
	}
	
}
