

export function MouseReducer(count = 1, action){
    switch(action.type){
        case "INCREMENT":
            return count + 1;
        case "DECREMENT":
            return count - 1;
        default:
            return count;
    }
}