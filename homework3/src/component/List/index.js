import React, {Component, Children} from 'react';
import ReactDOM, {render} from 'react-dom';
import "./index.css";

export default class List extends Component {
    render() {
        console.log(this.props.data)
        let items = this.props.data.map(function(item){
            return (
                <li key={item.id} className={item.bgColor}>{item.content}</li>
            )
        })
        return (
            <ul>
                {items}
            </ul>
        )
    }
}