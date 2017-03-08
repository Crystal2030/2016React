import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

const Home = () => <div><Links/><h1>Home</h1></div>;
const About = () => <div><Links/><h1>About</h1></div>;
const Contact = () => <div><Links/><h1>Contact</h1></div>;

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Router>
        );
    }
}

const Links = () =>
    <nav>
        <Link to="/">Home  </Link>
        <Link to="/about">About  </Link>
        <Link to="/contact">Contact</Link>
    </nav>

export default App;