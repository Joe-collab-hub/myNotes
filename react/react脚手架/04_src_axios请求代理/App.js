import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	
	// 获取数据的回调函数
	getStudentData = () => {
		axios.get('http://localhost:3000/api/students').then(
				res => {console.log(res);},
				err => {console.log(err);},
		);
	};
	getCarData = () => {
		axios.get('http://localhost:3000/auth/cars').then(
				res => {console.log(res);},
				err => {console.log(err);},
		);
	};
	
	render () {
		return (
				<div>
					<button onClick={this.getStudentData}>点我获取学生数据</button>
					<button onClick={this.getCarData}>点我获取汽车数据</button>
				</div>
		);
	}
	
}
