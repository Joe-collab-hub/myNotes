import React, { Component } from 'react';
import Search from './component/Search';
import List from './component/List';

export default class App extends Component {
	
	
	
	// 更新APP的state
	updateAppState = (stateObj) => {
		this.setState(stateObj);
	};
	
	render () {
		return (
				<div className="container">
					<Search updateAppState={this.updateAppState}/>
					<List {...this.state}/>
				</div>
		);
	}
	
}
