import React, {Component, PropTypes} from 'react';


class UserProfile extends Component {
	render(){
		console.log(this.props, 'userProfile 3333');//从 profile传入进来的username和info
		const {username, info} = this.props;
		let {avatar_url, name, company, email,followers,location,blog,bio} = info;
		console.log(info, 4444)
		return (
			<div>
				<h3>用户信息</h3>
				<ul>
					<li className="list-group-item">
						<img src={avatar_url} className="img-rounded img-responsive" alt=""/>
					</li>
					{name && <li className="list-group-item">Name： {name}</li>}
					{ company && <li className="list-group-item">Company：{company}</li>}
					{email && <li className="list-group-item">Email: {email}</li>}
					{followers && <li className="list-group-item">Followers: {followers}</li>}
					{location && <li className="list-group-item">Location: {location}</li>}
					{blog && <li className="list-group-item">Blog: {blog}</li>}
					{bio && <li className="list-group-item">Bio: {bio}</li>}
				</ul>
			</div>
		)
	}
}
UserProfile.propTypes = {
	username: PropTypes.string.isRequired,
	info: PropTypes.object
}
export default UserProfile;