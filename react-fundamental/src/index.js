//ES6
import React, {Component} from 'React';
import ReactDOM, {render} from 'react-dom';

import UseChildrenComponent from "./MyComponent/ListComponent"

//props数据
const obj = {
    name: 'crystal',
    type: 'female',
    aa: ["red", "blue", "yellow"]
};
//嵌入变量全部放入花括号里{}
//如果obj有几十个属性，可以通过 {...obj} 来批量设置一个对象的键值对到组件的属性
//name = {obj.name} type={obj.type}
render(<UseChildrenComponent />, document.getElementById('app'));

