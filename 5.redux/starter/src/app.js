import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from "./redux/store";
import RootApp from './containers/RootApp';



let root = document.getElementById('app');
render(<Provider store={store}><RootApp/></Provider>, root);
