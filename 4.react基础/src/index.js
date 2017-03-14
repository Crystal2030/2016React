import React, {Component, Children} from 'react';
import ReactDOM, {render} from 'react-dom';


class App extends Component {
    render () {
        return (
            <div>
                <List>
                    <a href="http://baidu.com">baidu</a>
                    <a href="http://google.com">google</a>
                </List>
            </div>
        )
    }
}

class List extends Component{
    render(){
        console.log(Children)
        let node = Children.map(this.props.children, (item) => {
            return <li>{item}</li>
        });
        console.log(node)
        return (
            <ul>
                {node}
            </ul>
        )
    }
}

render(<App/>, document.getElementById('app'));


