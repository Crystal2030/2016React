import React, {Component} from "react";
import "./Mouse.css";

class Mouse extends Component {
    render() {
        console.log(this.props);
        const tmp = (
            <table className="table">
                <tr>
                    <td><img src="../../static/images/mouse.png" /></td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
            </table>
        )
        return (
            <div className="mouse-box">
                <h1>打地鼠</h1>
                {tmp}
                <button className="ready">Ready</button>
            </div>
        )
    }
}

Mouse.propTypes = {

};

export default Mouse;