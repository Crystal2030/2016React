import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, hashHistory  } from 'react-router';

import routes from './routes';

class App extends Component {


    render(){
        return (
            <routes/>
        )
    }
}

render( <Router routes={routes} history={hashHistory} />  , document.getElementById('app'));