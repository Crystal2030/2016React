import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import "./index.css";

/*const Home = () => <div><Links/><h1>Home</h1></div>;
const About = () => <div><Links/><h1>About</h1></div>;
const Contact = () => <div><Links/><h1>Contact</h1></div>;*/

/*const Home = (props) =>
    <div>
        <Links />
        <h1>Home</h1>
        {props.children}
    </div>

const About = (props) =>
    <div>
        <h1>我是默认展示的路由</h1>
        {props.children}
    </div>

const Contact = () =>
    <div>
        <h1>Contact</h1>
    </div>*/

//路由变量
class Message extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.params.message || 'Home'}</h1>
                <Links />
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/(:message)" component={Message} />
                {/* <Route path="/" component={Home}>
                    <IndexRoute component={About} />
                    <Route path="about" component={About}>
                        <Route path="contact" component={Contact} />
                    </Route>
                </Route>*/}
            </Router>
        );
    }
}
/**
 * '/'   对应的是 Home组件
 * '/about' 对应的是 Home + About
 * '/about/contact' 对应的是 Home + About + Contact
 */
const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">Home  </Link>
        <Link activeClassName="active" to="/about">About  </Link>
        <Link activeClassName="active" to="/contact">Contact</Link>
    </nav>

export default App;