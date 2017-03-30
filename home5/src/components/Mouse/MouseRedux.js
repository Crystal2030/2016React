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

export function Hit(){
    return (dispatch, getState) => {
        dispatch({type: "click", id: 1});
    }
}
export function MouseReducer(data=[], action){
    switch(action.type){
        case "click":
            console.log(11111);

        default:
            return data;
    }
}