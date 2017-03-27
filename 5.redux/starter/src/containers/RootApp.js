import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from "../components/Counter";


//connect()返回的还是一个function
//connect()(参数使我们的组件),返回值依然是一个组件
//RootApp 被链接之后的App
//高阶组件 higher order component

const RootApp = connect((state) => {
    return {
        value: state
    }
}, (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
})( Counter );

export default RootApp;