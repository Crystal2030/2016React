import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from "./redux/store";
import RootApp from './containers/RootApp';
import DevTools from './containers/DevTools';


let root = document.getElementById('app');
render(<Provider store={store}>
    <div>
        <DevTools/>
        <RootApp/>
    </div>
</Provider>, root);
