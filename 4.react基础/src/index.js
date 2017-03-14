import React, {Component} from 'react';
import ReactDOM, {render, findDOMNode} from 'react-dom';

import "./index.css";
// import Profile from './component/Profile';
import Range from './component/Range';

const data = {
    "name": "Crystal2030",
    "id": 6970454,
    "avatar_url": "https://avatars0.githubusercontent.com/u/6970454?v=3"
};

class App extends Component {
    constructor(){
        super();
        //初始的state
        //defaultProps性质一样
        this.state = {
            one: 0,
            two: 0,
            three: 0
        }
        // this.update = this.update.bind(this);//改变this指向， 或者可以用arrow function
    }

    update = (e) =>{
        console.log('=====')
        console.log(findDOMNode(this.refs.one).value);
        this.setState({
            one: findDOMNode(this.refs.one).value,
            two: findDOMNode(this.refs.two).value,
            three: findDOMNode(this.refs.three).value,
        })
    }
    render () {
    return (
        <div>
            {/*使用refs来操作DOM*/}
            {/*<input type="text" onChange={this.update}/>*/}
            <h1>hello, {this.state.one}</h1>
            <Range ref="one" update={this.update} /> {this.state.one}
            <Range ref="two" update={this.update} />{this.state.two}
            <Range ref="three" update={this.update} />{this.state.three}
        </div>
    )
    }
}

// 创建有状态的组件：调用Component createClass
//创建无状态的组件：
{/*const App = ()=> <h1>create stateless component.</h1>;*/}

render(<App/>, document.getElementById('app'));


