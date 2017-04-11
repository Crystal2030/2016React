import React, {Component } from 'react';

class App extends Component{
	render(){
		return (
			<div>
				<h1>这是我的在线个人网站!</h1>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

export default App;