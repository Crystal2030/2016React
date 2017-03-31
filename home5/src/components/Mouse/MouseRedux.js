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
        dispatch({type: "HIT", id: 1});
    }
}
export function Start(){
	return (dispatch, getState) => {
		setTimeout(function(){
			return dispatch({type: "BEGIN"});
		},1000);
	}
}
export function MouseReducer(data=[], action){
    switch(action.type){
        case "HIT":
            console.log(11111111);
	    case "BEGIN":
	    	console.log(data, 22222222222222222)
		    data.items[0].isShow = true;
		    return data;
        default:
            return data;
    }
}