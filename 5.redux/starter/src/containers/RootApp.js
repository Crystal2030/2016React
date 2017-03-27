import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from "../components/Counter/Counter";
import {Inc, Dec} from "../components/Counter/CounterRedux";


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
        onIncrement: () => dispatch(Inc()),
        onDecrement: () => dispatch(Dec())
    }
})( Counter );

export default RootApp;