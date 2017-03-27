import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from "../components/Counter";


//connect()返回的还是一个function
//connect()(参数使我们的组件),返回值依然是一个组件
//RootApp 被链接之后的App
//高阶组件 higher order component

//1.延迟2秒 return action
//2. return function, 提示Actions must be plain objects, Use custom middleware for async actions.
//3. redux-thunk: 定义一个action -> return出来一个function，接收到的参数：dispatch，getState
function Inc () {
    return (dispatch, getState) => {
        setTimeout(function(){
           return dispatch( {type: "INCREMENT"} );
        }, 2000)
    }
}

function Dec () {
    return ({type: "DECREMENT"});
}
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