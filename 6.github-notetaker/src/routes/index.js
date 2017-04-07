import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Main from '../containers/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default  (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="home" component={Home}/>
            <Route path="profile/:username" component={Profile}/>
        </Route>
    </Router>
)