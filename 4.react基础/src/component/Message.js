import React, {Component} from 'react';

export default class Message extends Component{
    componentWillReceiveProps(nextProps){
        console.log('receive props~');
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate~');
        //boolean
        return true;
    }
    componentWillUpdate(){
        console.log('component will update~');
    }
    componentDidUpdate(){
        console.log('component did update~');
    }
    componentWillMount(){
        console.log('will mount~');
    }
    render () {
        console.log('render~')
        console.log(this.props);
        return (
            <span>{this.props.val}</span>
        )
    }
    componentDidMount(){
        console.log('did mount!~');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount~');
    }
}