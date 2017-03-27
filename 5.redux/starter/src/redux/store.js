import {createStore} from 'redux';
import counter from './reducers';

//store
let store = createStore(counter);

export default store;

