import React, {Component, Children} from 'react';
import ReactDOM, {render} from 'react-dom';
import "./index.css";
export default class List extends Component {
    constructor () {
        super();
        this.state = {
            data: [
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
            ]
        };
    }
    save = (e) => {

    }
    edit = (e) => {

    }
    render() {
        console.log(this.state.data)

        return (
            <ul>
                <li className={this.state.data[0].bgColor}>
                    {this.state.data[0].content}
                    <button onClick={this.edit}>编辑</button>
                </li>
                <li className={this.state.data[1].bgColor}>
                    {this.state.data[1].content}
                    <button onClick={this.edit}>编辑</button>
                </li>
                <li className={this.state.data[2].bgColor}>
                    {this.state.data[2].content}
                    <button onClick={this.edit}>编辑</button>
                </li>
            </ul>
        )
    }
}