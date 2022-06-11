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
import React,{Component} from 'react';

// 引入Hello组件
import Hello from './component/Hello';

/// 引入Welcome组件
import Welcome from './component/Welcome';

// 创建暴露组件
export default class App extends Component{
	render () {
		return(
				<div>
					<Hello/>
					<Welcome/>
				</div>
		)
	}
}
