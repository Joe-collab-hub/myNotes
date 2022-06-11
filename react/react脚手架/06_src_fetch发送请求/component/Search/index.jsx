import React, { Component } from 'react';
import PubSub from 'pubsub-js';
// import axios from 'axios';

export default class Search extends Component {
	
	search = async () => {
		// 获取用户输入的{连续赋值+重命名}
		const { keyWordElement: { value: keyWord } } = this;
		
		// 发送请求前通知List组件更新状态
		PubSub.publish('search', {
			isLoading: true,
			isFirst: false,
		});
		// 发生网络请求  使用axios发送
		/* axios.get(`/api/search/users?q=${keyWord}`)
				.then(res => {
							// 请求成功后通知List组件更新状态
							PubSub.publish('search', {
								isLoading: false,
								users: res.data.items,
							});
						},
						err => {
							// 请求失败后通知List组件更新状态
							PubSub.publish('search', {
								isLoading: false,
								err: err.message,
							});
						}); */
		
		// 发送网络请求  使用fetch发送 (未优化)
		/* fetch(`/api/search/users?q=${keyWord}`)
				.then(res => {
							console.log('连接服务器成功了');
							return res.json();
						},
						err => {
							console.log('连接服务器失败了');
							return new Promise(() => {}
							);
						},
				)
				.then(res => {
							console.log('获取数据成功了');
							// 请求成功后通知List组件更新状态
							PubSub.publish('search', {
								isLoading: false,
								users: res.items,
							});
						},
						err => {
							console.log('获取数据失败了');
							// 请求失败后通知List组件更新状态
							PubSub.publish('search', {
								isLoading: false,
								err: err.message,
							});
						}); */
		
		// 发送网络请求  使用fetch发送 (优化)
		try{
			const res = await fetch(`/api/search/users?q=${keyWord}`);
			const data = await res.json();
			// 请求成功后通知List组件更新状态
			PubSub.publish('search', {
				isLoading: false,
				users: data.items,
			});
		} catch (e) {
			console.log('获取数据失败了',e);
			// 请求失败后通知List组件更新状态
			PubSub.publish('search', {
				isLoading: false,
				err: e.message,
			});
		}
	};
	
	render () {
		return (
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<div>
						<input ref={c => this.keyWordElement = c} type="text"
						       placeholder="enter the name you search"/>&nbsp;
						<button onClick={this.search}>搜索</button>
					</div>
				</section>
		);
	}
	
}
