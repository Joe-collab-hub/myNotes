import React, { Component } from 'react'

export default class Count extends Component {
	
	state = { count: 0 }
	
	// 正常加
	add = () => {
		const { value } = this.selectNumber
		const { count } = this.state
		this.setState ({ count: count + value * 1 })
	}
	
	// 正常减
	subtract = () => {
		const { value } = this.selectNumber
		const { count } = this.state
		this.setState ({ count: count - value * 1 })
	}
	
	// 奇数在加
	oddNumbeAdd = () => {
		const { value } = this.selectNumber
		const { count } = this.state
		if ( count % 2 !== 0 ) {
			this.setState ({ count: count + value * 1 })
		}
	}
	
	// 异步加
	asynchronousAdd = () => {
		const { value } = this.selectNumber
		const { count } = this.state
		setTimeout (() => {
			this.setState ({ count: count + value * 1 })
		}, 500)
	}
	
	render () {
		const { count } = this.state
		return (
				<div>
					<h1>当前求和为：{count}</h1>
					<select ref={c => this.selectNumber = c}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<button onClick={this.add}>+</button>
					<button onClick={this.subtract}>-</button>
					<button onClick={this.oddNumbeAdd}>当前求和为奇数再加</button>
					<button onClick={this.asynchronousAdd}>异步加</button>
				</div>
		)
	}
	
}
