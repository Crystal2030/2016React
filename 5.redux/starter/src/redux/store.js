import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import middlewareDemo from './middlewareDemo';
import loggerMiddleware from './loggerMiddleware';
import thunk from 'redux-thunk';

import {counter} from '../components/Counter/CounterRedux';
import DevTools from '../containers/DevTools';

// applyMiddleware(applyMiddleware1, applyMiddleware2);

//applyMiddleware的第一种用法
// let store = createStore(counter,  applyMiddleware(createLogger()));


//applyMiddleware的第二种用法
/*const finalCreateStore = applyMiddleware(createLogger())(createStore);

console.log(finalCreateStore)

const store = finalCreateStore(counter);*/
//DevTools.instrument()

const enhancer = compose(
    applyMiddleware(
        loggerMiddleware,
        thunk),
    DevTools.instrument()
)
let store = createStore(
    counter,
    enhancer
);
export default store;

