import { Router, Route, browserHistory , Link} from 'react-router';
import { App } from '../containers';
import React from 'react';

const Home = () =>
    <div>
        <Links />
        <h1>Home</h1>
    </div>
const About = () =>
    <div>
        <Links />
        <h1>About</h1>
    </div>
const Contact = () =>
    <div>
        <Links />
        <h1>Contact</h1>
    </div>
export default (
  <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
  </Router>
)


const Links = () =>
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>