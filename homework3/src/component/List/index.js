import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ItemUtil from './ItemUtil';
import Item from './Item';
import "./index.css";

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = ItemUtil.getAllItems();
    }

    componentDidMount() {
        console.log('did mount')
        ItemUtil.addEventListener(()=>this.setState(ItemUtil.getAllItems()));
    }

    displayAddForm = (e) =>{
        e.preventDefault();
        this.setState(ItemUtil.displayAdd());
        console.log(ItemUtil.addItem(),'0000000000000')
    }

    addItem = (e) => {
        e.preventDefault();
        var currentTarget = e.target.dataset.id;
        var newContent = 'zhufeng';
        var newColor = 'red';
        if(currentTarget == "input"){
            console.log('change content')
            newContent = e.target.value;
        }
        if(currentTarget == "select"){
            console.log('change color')
            newColor = e.target.value;
        }
        if(currentTarget == "add"){
            console.log(newContent, newColor,'444444444444')
            ItemUtil.handleAdd(newContent, newColor);
            ItemUtil.eventEmit();
        }

    }

    render() {
        const List = this.state.data.map(child => {
            return (
                <Item key={child.id} data={child} />
            )
        });
        return (
            <div>
                <ul>
                    {List}
                </ul>
                <Add displayAddForm = {this.displayAddForm} saveItem = {this.addItem} display={this.state.display} currentItems = {this.state.data} />
            </div>
        )
    }
}

class Add extends Component {
    render() {
        return (
            <div>
                <AddForm saveItem = {this.props.saveItem} display={this.props.display} />
                <button onClick={this.props.displayAddForm} style={{position:"static"}}>新建</button>
            </div>
        )
    }
}

class AddForm extends Component {

    render() {
        return (
            <div style={{display:"block",backgroundColor: "red",padding:"10px"}}>
                <input data-id="input" type="text" onBlur={this.props.saveItem} />
                <select data-id="select" onChange={this.props.saveItem}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
                <div style={{float:"right"}}>
                    <button data-id="add" style={{position:"static"}} onClick={this.props.saveItem}>保存</button>
                    <button style={{position:"static"}}>删除</button>
                </div>
            </div>
        )
    }
}