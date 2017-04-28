import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';

import './index.css';

class NavMenu extends Component{

	getMenuItems(data){
		// data type array
		// [{name: "home", des: "首页"}, {name: "about", des: "关于我"}]
		const collapse = this.props.collapse;
		return data.map((info) => (
			<Menu.Item key={info.name}>
				<Link to={info.name == "home" ? "/" : `/${info.name}`}>
					<i className={info.name == "home" ? "iconfont icon-index" : `iconfont icon-${info.name}`}></i>
					{collapse ? "" : <span className="nav-text">{info.des}</span>}
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
		];

		const {collapse, handleCollapse, pathname} = this.props;
		return (
		<aside className={collapse?"layout-aside layout-aside-collapse" : "layout-aside"}>
			<div className="layout-logo">
				<i className="iconfont icon-jianli logo"></i>
				{collapse ? "" : <span className="title-text">Crystal</span>}
			</div>
			<Menu mode="inline"
			 theme="dark"
			 defaultSelectedKeys={["home"]}
			 selectedKeys={[pathname]}>
				{this.getMenuItems(data)}
			</Menu>
			<div className={collapse ? "aside-action aside-action-collapse" : "aside-action"} onClick={handleCollapse}>
				{collapse ? <Icon type="right" /> : <Icon type="left" />}
			</div>
		</aside>
		)
	}
}

export default NavMenu;