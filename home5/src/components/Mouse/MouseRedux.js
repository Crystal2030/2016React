
export function Hit(id){
    return (dispatch, getState) => {
        dispatch({type: "HIT", id: id});
    }
}
export function Start(){
	return (dispatch, getState) => {
		return dispatch({type: "BEGIN"});
	}
}
export function MouseReducer(data=[], action){
    switch(action.type){
        case "HIT":
            let afterHit = {};
            data.items.forEach((item) => {
                if(item.id === action.id){
                    item.img = 'mouse_cry';
                }
            })
            Object.assign(afterHit, data);
            return afterHit;
	    case "BEGIN":
            // reducer里面，修改值一定要是覆盖的修改
		    data.items[0].isShow = true;
		    console.log(Object.assign({}, data))
		    return Object.assign({}, data);
        default:
            return data;
    }
}