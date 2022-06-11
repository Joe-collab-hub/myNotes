/**
 * Time:2022/4/30 15:46 28
 * Name:index.js
 * Path:src/component/Hello
 * ProjectName:react脚手架
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入React框架
import React, { Component } from 'react';

// 引入css样式
import hello from './index.module.css'

export default class Hello extends Component {
	render () {
		return (
				<div>
					<h1 className={hello.h1}>hello React</h1>
				</div>
		);
	}
}
