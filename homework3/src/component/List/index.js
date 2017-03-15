import React, {Component, Children} from 'react';
import ReactDOM, {render} from 'react-dom';
import "./index.css";

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            openEdit: false,
            text: '编辑'
        }
    }
    changeContent = (e) => {
        var currentId = e.target.id;
        var newArray = this.state.data.slice();
        newArray[currentId-1].content = e.target.value;
        console.log(e.target.value)
        this.setState({
            openEdit: true,
            text: '保存',
            data: newArray
        })
    }

    changeBg = (e) => {
        var currentId = e.target.id;
        var newArray = this.state.data.slice();
        console.log(currentId,e.target, this.state.data)
        console.log(e.target.value);
        newArray[currentId-1].bgColor = e.target.value;
        console.log(newArray)
        this.setState({
            openEdit: true,
            text: '保存',
            data: newArray
        })
    }

    render() {

        let options = this.props.data.map(function(item){
           return (
                 <option key={item.id} value={item.bgColor}>{item.bgColor}</option>
           )
        });
        let items = this.props.data.map(function(item,index){
            var editStateClass = 'edit_state';
            var contentClass = 'content_open';
            if(this.state.openEdit == true){
                /*editStateClass += '_open';
                contentClass += '_close';*/
            }
            let editState = (
               <div>
                   <input type="text" id={item.id} value={item.content} onChange={this.changeContent}/>
                   <select id={item.id} onChange={this.changeBg}>{options}</select>
               </div>
            );
            return (
                <li key={item.id} className={item.bgColor}>
                    <span className={contentClass}>{item.content}</span>
                    {editState}
                    <button id={item.id} >{this.state.text}</button>
                </li>
            )
        }, this);
        return (
            <ul>
                {items}
            </ul>
        )
    }
}