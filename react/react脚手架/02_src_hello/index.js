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

// 引入App组件
import App from './App';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '..\src\dev';

// 渲染页面
ReactDOM.render(<DevSupport
		ComponentPreviews={ComponentPreviews}
		useInitialHook={useInitial}
>
	<App/>
</DevSupport>, document.getElementById('root'));
