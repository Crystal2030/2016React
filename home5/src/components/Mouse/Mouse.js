import React, {Component} from "react";
import "./Mouse.css";

class Mouse extends Component {
    render() {
        console.log(this.props);

        const tableNode = (
            <table className="table">
                <tr>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[0]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[1]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[2]}/></td>
                </tr>
                <tr>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[3]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[4]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[5]}/></td>

                </tr>
                <tr>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[6]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[7]}/></td>
	                <td ><MouseItem onHit={this.props.onHit} item={this.props.value.items[8]}/></td>

                </tr>
            </table>
        )
        return (
            <div className="mouse-box">
                <h1>打地鼠</h1>
                {tableNode}
                <button onClick={this.props.onStart} className="ready">Ready</button>
            </div>
        )
    }
}

Mouse.propTypes = {

};

class MouseItem extends Component{

	render(){
		console.log(this.props.item.isShow, '*************')
		const styles = this.props.item.isShow? {
				backgroundImage: ` url(../../static/images/${this.props.img}.png) `,
				backgroundRepeat: 'no',
				height: '150px'
			}:{};
				console.log(styles,'*************')
		return (
			<div style={styles} >
			</div>
		)
	}
}

export default Mouse;