import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import "./index.css";
class App extends Component {
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
}

render(<App/>, document.getElementById('app'));


