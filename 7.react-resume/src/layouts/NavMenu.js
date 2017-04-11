import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';

import './NavMenu.css';

class NavMenu extends Component{
	getMenuItems(data){
		// data type array
		// [{name: "home", des: "首页"}, {name: "about", des: "关于我"}]
		return data.map((info) => (
			<Menu.Item key={info.name}>
				<Link to={info.name == "home" ? "/" : `/${info.name}`}>
					<i className={info.name == "home" ? "iconfont icon-index" : `iconfont icon-${info.name}`}></i>
					<span className="nav-text">{info.des}</span>
				</Link>
			</Menu.Item>
		))
	}
	render(){
		const data = [
			{name: "home", des: "首页"},
			{name: "skill", des: "工作技能"},
			{name: "project", des: "项目经验"},
			{name: "contact", des: "联系我"},
			{name: "about", des: "关于我"}
		]
		return (
		<aside className="layout-aside layout-logo">
			<div className="layout-logo">
				<i className="iconfont icon-jianli logo"></i>
				<span className="title-text">Crystal</span>
			</div>
			<Menu mode="inline"
			 theme="dark"
			 defaultSelectedKeys={["home"]}
			 selectedKeys={["home"]}>
				{this.getMenuItems(data)}
			</Menu>
			<div className="aside-action">
				<Icon type="right" />
			</div>
		</aside>
		)
	}
}

export default NavMenu;