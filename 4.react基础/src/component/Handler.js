import React, {Component} from 'react';
import {unmountComponentAtNode} from 'react-dom';

import Message from './Message';

export default class Handler extends Component {
    constructor () {
        super();
        this.state = {val: 0, destroyed: false}
    }
    update = (e) =>{
        this.setState({
            val: this.state.val + 1
        })
    }
    destroy = (e) =>{
        this.setState({
            destroyed: true
        })
    }
    remove = () => {
        //remove method2
        //从根元素移除整个DOM节点
        unmountComponentAtNode(document.getElementById('app'));
    }
    render() {
        //remove method1
        //只是将下面的用到的组件不渲染出来
        if(this.state.destroyed == true){
            return null;
        }
        return (
            <div>
                <Message val={this.state.val} />
                <button onClick={this.update}>{this.state.val}</button>
                <button onClick={this.destroy}>销毁组件</button>
                <button onClick={this.remove}>移除组件</button>
            </div>
        )
    }

}