import React, {Component, Children} from 'react';
import ReactDOM, {render} from 'react-dom';

import Handler from './component/Handler';

class App extends Component {
    render(){
        return <Handler/>;
    }
}



render(<App/>, document.getElementById('app'));


