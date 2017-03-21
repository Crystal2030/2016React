import React, {Component} from 'react';
import { IndexLink} from 'react-router';
import NavLink from "./NavLink";

import "./style.css";
class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <ul className="ul-node">
                    <li>
                        <IndexLink to="/" activeStyle={{color: "red"}}>首页</IndexLink>
                    </li>
                    <li>
                        <NavLink url="/message" linkName="消息"/>
                    </li>
                </ul>
            </div>
        );
    }
}
export default App;