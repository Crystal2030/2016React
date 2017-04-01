
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
            console.log(data, '3333333333')
            let obj = {};
            let id = Math.floor(Math.random()*10);
		    data.items[id].isShow = true;
            data.ready = true;
		    return Object.assign(obj, data);
        default:
            return data;
    }
}