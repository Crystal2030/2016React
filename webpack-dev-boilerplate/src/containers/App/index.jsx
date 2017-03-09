import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import "./index.css";

/*const Home = () => <div><Links/><h1>Home</h1></div>;
const About = () => <div><Links/><h1>About</h1></div>;
const Contact = () => <div><Links/><h1>Contact</h1></div>;*/
//嵌套路由
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
/*class Message extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.params.message || 'Home'}</h1>
                <Links />
            </div>
        )
    }
}*/

//Route中components参数的高级用法
/*const HomeHeader = () => <h1>HomeHeader</h1>
const HomeBody = () => <h1>HomeBody</h1>
const AboutHeader = () => <h1>AboutHeader</h1>
const AboutBody = () => <h1>AboutBody</h1>

const Container = (props) =>
    <div>
        <h1>Container组件</h1>
        {props.header}
        {props.body}
        <Links />
    </div>*/
/**
 * '/': Container + HomeHeader + HomeBody
 * '/about': Container + AboutHeader + AboutBody
 */

// 使用query获取URL中的参数
const Page = (props) =>
    <div>
        <h1>{props.location.query.message || 'Hello'}</h1>
        <Links/>
    </div>

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                {/*<Route path="/(:message)" component={Message} />*/}
                {/* <Route path="/" component={Home}>
                    <IndexRoute component={About} />
                    <Route path="about" component={About}>
                        <Route path="contact" component={Contact} />
                    </Route>
                </Route>*/}
                {/*<Route path="/" component={Container}>
                    <IndexRoute components={{ header:HomeHeader, body:HomeBody }} />
                    <Route path="about" components={{ header:AboutHeader, body:AboutBody }} />
                </Route>*/}
                <Route path="/" component={Page} />
            </Router>
        );
    }
}
/**
 * '/'   对应的是 Home组件
 * '/about' 对应的是 Home + About
 * '/about/contact' 对应的是 Home + About + Contact
 */
/*const Links = () =>
    <nav>
        <Link to="/">Hello</Link>
        <Link to="/about">About</Link>
    </nav>*/
const Links = () =>
    <nav>
        <Link to={{ pathname: "/", query: {message: "crystal"} }} > 链接 </Link>
    </nav>
export default App;