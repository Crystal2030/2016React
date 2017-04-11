import React, {Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavMenu from './NavMenu';
import './App.css';

class App extends Component{
	render(){
		return (
			<div>
				<NavMenu/>
				<h1>这是我的在线个人网站!</h1>
				<div className="main">
					<ReactCSSTransitionGroup
						component="div"
						className="app"
					    transitionName="app"
					    transitionEnterTimeout={1000}
					    transitionLeaveTimeout={1000}>
						<div className="content" key={this.props.location.pathname}>
							{this.props.children}
						</div>
					</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
}

export default App;