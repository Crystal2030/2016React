import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import {MouseReducer} from "../components/Mouse/MouseRedux";
import DevTools from '../containers/DevTools';


const enhancer = compose(
    applyMiddleware(
        thunk
    ),
    DevTools.instrument()
)

let store = createStore(
    MouseReducer,
    enhancer
)

export default store;