import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
	
	search = () => {
		// 获取用户输入的{连续赋值+重命名}
		const { keyWordElement: { value: keyWord } } = this;
		
		// 发送请求前通知App组件更新状态
		this.props.updateAppState({
			isLoading: true,
			isFirst: false,
		});
		
		// 发生ajax请求
		// axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`)
		axios.get(`/api/search/users?q=${keyWord}`)
				.then(res => {
							// 请求成功后通知App组件更新状态
							this.props.updateAppState({
								isLoading: false,
								users: res.data.items,
							});
						},
						err => {
							// 请求失败后通知App组件更新状态
							this.props.updateAppState({
								isLoading: false,
								err: err.message,
							});
						});
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
