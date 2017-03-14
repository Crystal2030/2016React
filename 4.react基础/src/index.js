import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import "./index.css";
/*class App extends Component {
    render () {
        const name = 'crystal';
        const styles = {
            fontSize: "40px",
            color: "orange",
            backgroundColor: "blue"
        }
        // return React.createElement('h1', null, 'hello jsx');
        return (
           <div className="container" style = {styles}>
               <h1>learn {name}</h1>
               < label htmlFor = "name" >aaa </label>
           </div>
        )

    }
}*/

// 创建有状态的组件：调用Component createClass
//创建无状态的组件：
const App = ()=> <h1>create stateless component.</h1>;

render(<App/>, document.getElementById('app'));


