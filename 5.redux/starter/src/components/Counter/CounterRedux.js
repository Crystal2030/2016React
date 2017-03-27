//1.延迟2秒 return action
//2. return function, 提示Actions must be plain objects, Use custom middleware for async actions.
//3. redux-thunk: 定义一个action -> return出来一个function，接收到的参数：dispatch，getState
export function Inc () {
    return (dispatch, getState) => {
        setTimeout(function(){
            return dispatch( {type: "INCREMENT"} );
        }, 2000)
    }
}

export function Dec () {
    return ({type: "DECREMENT"});
}

//reducer
export function counter(count =0, action)  {
    switch(action.type){
        case "INCREMENT":
            return count + 1;
        case "DECREMENT":
            return count - 1;
        default:
            return count;
    }
}
