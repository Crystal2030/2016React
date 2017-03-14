import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import "./index.css";
import Profile from './component/Profile';

const data = {
    "name": "Crystal2030",
    "id": 6970454,
    "avatar_url": "https://avatars0.githubusercontent.com/u/6970454?v=3"
};

class App extends Component {
    render () {
        return <Profile name={data.name}  id={data.id} url={data.avatar_url}/>;
    }
}

// 创建有状态的组件：调用Component createClass
//创建无状态的组件：
{/*const App = ()=> <h1>create stateless component.</h1>;*/}

render(<App/>, document.getElementById('app'));


