import React, {Component} from 'react';

import Notes from './Notes';
import UserRepos from './UserRepos';
import UserProfile from './UserProfile';
import getGithubInfo from '../utils/getGithubInfo';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			info: {},
			repos: [],
			notes: []
		}
	}
	//修复bug
	componentWillReceiveProps(nextProps){
		this.update(nextProps.params.username)
	}

	//修复：当我们直接刷新当前页面时，不会更新初始数据
	componentDidMount(){
		this.update(this.props.params.username);
	}

	update(username){
		getGithubInfo(username)
			.then(data => {
				this.setState({
					info: data.userInfo,
					repos: data.userRepos
				})
			})
	}
	//当改变的时候修改state值
	//componentDidMount只会执行一次
	/*componentDidMount(){
		const {username} = this.props.params;
		getGithubInfo(username)
			.then(data => {
				this.setState({
					info: data.userInfo,
					repos: data.userRepos
				})
			})
	}*/
    render(){
	    console.log(this.props, 1111111);
	    const {username} = this.props.params;
	    return (
            <div className="row">
	            <div className="col-sm-4">
		            <UserProfile username={username} info={this.state.info}/>
	            </div>
	            <div className="col-sm-4">
		            <UserRepos username={username} repos={this.state.repos}/>
	            </div>
	            <div className="col-sm-4">
		            <Notes username={username} notes={this.state.notes}/>
	            </div>
            </div>
        )
    }
}

export default Profile;