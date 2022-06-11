import React, { Component } from 'react';
// 引入消息与发布
import PubSub from 'pubsub-js';

import './index.css';

export default class List extends Component {
	
	state = { // 初始化state
		users: [],  // 存储用户信息
		isFirst: true, // 是否是第一次搜索
		isLoading: false, // 是否正在加载
		err: '', // 存储错误信息
	};
	
	// 组件挂载完成
	componentDidMount() {
		PubSub.subscribe('search', (_, data) => {
			this.setState(data)
		});
	}
	
	// 组件即将销毁
	componentWillUnmount() {
		PubSub.unsubscribe('search');
	}
	
	render () {
		const { users, isFirst, isLoading, err } = this.state;
		return (
				<div className="row">
					{
						isFirst ? <h2>欢迎使用，输入关键词，随后展示数据</h2> :
								isLoading ? <h2>Loading......</h2> :
										err ? <h2 style={{ color: 'red' }}>{err}</h2> :
												users.map((item) => {
													return (
															<div className="card" key={item.id}>
																<a href={item.html_url} rel="noreferrer"
																   target="_blank">
																	<img src={item.avatar_url}
																	     style={{ width: '100px' }} alt="avatar"/>
																</a>
																<p className="card-text">{item.login}</p>
															</div>
													);
												})
					}
				</div>
		);
	}
	
}
