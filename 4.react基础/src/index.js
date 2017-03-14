import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import "./index.css";
// import Profile from './component/Profile';

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
        this.state = {name: 'react course'}
        // this.update = this.update.bind(this);//改变this指向， 或者可以用arrow function
    }

    update = (e) =>{
        console.log(this);
        this.setState({
            name: e.target.value
        })
    }
    render () {
    return (
        <div>
            <input type="text" onChange={this.update}/>
            <h1>hello, {this.state.name}</h1>
        </div>
    )
    }
}

// 创建有状态的组件：调用Component createClass
//创建无状态的组件：
{/*const App = ()=> <h1>create stateless component.</h1>;*/}

render(<App/>, document.getElementById('app'));


