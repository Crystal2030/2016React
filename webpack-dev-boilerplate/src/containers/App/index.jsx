import React, { Component, PropTypes  } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute,Redirect  } from 'react-router';
import "./index.css";

/*const Home = () => <div><Links/><h1>Home</h1></div>;
const About = () => <div><Links/><h1>About</h1></div>;
const Contact = () => <div><Links/><h1>Contact</h1></div>;*/
//嵌套路由
/**
 * '/'   对应的是 Home组件
 * '/about' 对应的是 Home + About
 * '/about/contact' 对应的是 Home + About + Contact
 */
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

/*// 使用query获取URL中的参数
const Page = (props) =>
    <div>
        <h1>{props.location.query.message || 'Hello'}</h1>
        <Links/>
    </div>*/

//
/*const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;*/

/*const Links = () =>
 <nav>
 <Link to="/">Hello</Link>
 <Link to="/about">About</Link>
 </nav>*/
/*const Links = () =>
 <nav>
 <Link to={{ pathname: "/", query: {message: "crystal"} }} > 链接 </Link>
 </nav>*/

/*const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact-us">Contact US</Link>
    </nav>*/

// setRouteLeaveHook路由钩子函数：处理路由切换时的操作

class Home extends Component {
    componentWillMount(){
        console.log(this);
        this.context.router.setRouteLeaveHook(
            this.props.route,
            //hook触发的时候应该要做什么
            this.routerWillLeave
        )
    }
    routerWillLeave( nextLocation ){
        return `页面即将从Home切换到${nextLocation.pathname}`
    }

    render(){
        return <div>
            <h1>Home</h1>
            <Links />
        </div>
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
};

const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </nav>

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
                {/*<Route path="/" component={Page} />*/
                }
                {/*<Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact-us" component={Contact} />
                <Redirect from="/contact" to="/contact-us" />*/}
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Router>
        );
    }
}




export default App;