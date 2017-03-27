import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import middlewareDemo from './middlewareDemo';
import loggerMiddleware from './loggerMiddleware';
import thunk from 'redux-thunk';

import {counter} from '../components/Counter/CounterRedux';

// applyMiddleware(applyMiddleware1, applyMiddleware2);

//applyMiddleware的第一种用法
// let store = createStore(counter,  applyMiddleware(createLogger()));


//applyMiddleware的第二种用法
/*const finalCreateStore = applyMiddleware(createLogger())(createStore);

console.log(finalCreateStore)

const store = finalCreateStore(counter);*/

let store = createStore(
    counter,
    applyMiddleware(
        loggerMiddleware,
        thunk)
);
export default store;

