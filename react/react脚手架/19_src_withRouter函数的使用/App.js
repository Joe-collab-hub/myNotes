import React, { Component } from 'react';
import { Route,Redirect,Switch} from 'react-router-dom';

import About from './psges/About'; // About是路由组件
import Home from './psges/Home';  // About是路由组件
import Header from './component/Header';  // Header是一般组件
import MyNavLink from './component/MyNavLink';

export default class App extends Component {
	render () {
		return (
				<div>
					<div className="row">
						<div className="col-xs-offset-2 col-xs-8">
							<Header/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-2 col-xs-offset-2">
							<div className="list-group">
								<MyNavLink replace to="/about">About</MyNavLink>
								<MyNavLink replace to="/home">Home</MyNavLink>
							</div>
						</div>
						<div className="col-xs-6">
							<div className="panel">
								<div className="panel-body">
									<Switch>
									{/* 注册路由 */}
										<Route path="/about" component={About}/>
										<Route path="/home" component={Home}/>
									<Redirect to={'/home'}/>
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
	
}
