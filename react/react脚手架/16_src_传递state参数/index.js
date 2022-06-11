/**
 * Time:2022/4/30 15:38 29
 * Name:index.js
 * Path:src
 * ProjectName:react脚手架
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入react框架
import React from 'react';

// 引入react-dom
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// 引入App组件
import App from './App';

// 渲染页面
ReactDOM.render(
		<BrowserRouter>
			<App/>
		</BrowserRouter>,
		document.getElementById('root'));
