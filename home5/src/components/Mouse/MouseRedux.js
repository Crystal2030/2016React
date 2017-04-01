let timer;

export function Hit(id){
    return (dispatch, getState) => {
        dispatch({type: "HIT", id: id});
    }
}
export function Start(){
	return (dispatch, getState) => {
		let getRound = setTimeout(() => {
			let data = getState();
			let hasUnhitMouse = data.items.find(item => item.img === 'mouse');
			let hasHitMouse = data.items.find(item => item.img === 'mouse_cry');
			console.log(!hasUnhitMouse , !!hasHitMouse, '7777777777');
			if(hasUnhitMouse){
				clearInterval(timer);
				clearTimeout(getRound);
				alert('Game Over');
				return;
			}

			if(!hasUnhitMouse && !!hasHitMouse){
				clearInterval(timer);
				clearTimeout(getRound);
				alert('Win, all mouses are hit!');
				return;
			}

		}, 5000)
		timer = setInterval(() => {
			return dispatch({type: "BEGIN"});
		}, 1000)
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
            let obj = {};
            let id = Math.floor(Math.random()*10);
		    data.items.forEach(item => {
		    	if(item.id == id && item.img === 'mouse'){
		    		item.isShow = true;
			    }else{
		    		item.isShow = false;
			    }
		    })
            data.ready = true;
		    return Object.assign(obj, data);
        default:
            return data;
    }
}