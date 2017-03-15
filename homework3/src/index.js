import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import List from './component/List';
var data = [
    {
        id: 1,
        content: 'zhufeng',
        bgColor: 'red'
    },
    {
        id: 2,
        content: 'react',
        bgColor: "blue"
    },
    {
        id: 3,
        content: 'component',
        bgColor: 'green'
    }
];
class App extends Component {
    constructor(){
        super();
        this.state = {
            data: data
        }
    }
    render(){
        return (
            <List data ={this.state.data} update = {this.update} />

        )
    }
}

render(<App/>, document.getElementById('app'));