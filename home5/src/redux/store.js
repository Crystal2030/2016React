import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import {MouseReducer} from "../components/Mouse/MouseRedux";
import DevTools from '../containers/DevTools';


let data = {
	items: [
		{id: 1,isShow: false},
		{id: 2,isShow: false},
		{id: 3,isShow: false},
		{id: 4,isShow: false},
		{id: 5,isShow: false},
		{id: 6,isShow: false},
		{id: 7,isShow: false},
		{id: 8, isShow: false},
		{id: 9, isShow: false}
	],
	ready: false,
	img: 'mouse'
}

const enhancer = compose(
	applyMiddleware(
		thunk
	),
	DevTools.instrument()
)

let store = createStore(
    MouseReducer,
	data,
    enhancer
)

export default store;