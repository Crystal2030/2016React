import React, { Component } from 'react';

export default class Item extends Component {
    static defaultProps = {
        bgColor:'red',
        content:"zhufeng"
    }
    render () {
        console.log(this.props)
        let data = this.props.data;
        let bgColor = data.bgColor;
        return (
            <li className={bgColor}>{data.content}</li>
        );
    }
}

