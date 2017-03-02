//组件 其实就是 状态机
// props（输入）-》组件内部逻辑(state)->html

import React, { Component, PropTypes} from 'react';

/*const defaultProps = {
    status: 'crysatl'
}*/
class StateDemo extends Component {

    constructor(){
        super();//继承
        this.state = {
            secondsElapsed: 0
        }
    }

    /*state = {
        secondsElapsed: 0
    }*/

    tick(){
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }

    componentDidMount(){
        this.interval = setInterval( this.tick.bind(this), 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        {/*初始渲染state*/}
        console.log(this);
        return (
            <div>目前已经计时：{this.state.secondsElapsed}秒, 初始的：{this.props.status}</div>
        )
    }
}

StateDemo.defaultProps = {
    status: 'sssssss'
};
StateDemo.propTypes = {
    status: React.PropTypes.string
};
export default StateDemo;