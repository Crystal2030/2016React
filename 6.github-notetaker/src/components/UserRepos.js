import React, {Component,PropTypes} from 'react';


class UserRepos extends Component {
	render(){
		return (
			<div>
				<h3>Git仓库</h3>
				<ul className="list-group">
					{
						this.props.repos.map((repo, index) => {
							return (
								<li className="list-group-item" key={index}>
									<h4><a href={repo.html_url}>{repo.name}</a></h4>
									<p>
										{repo.description}
									</p>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
UserRepos.propTypes = {
	username: PropTypes.string.isRequired,
	info: PropTypes.array.isRequired
}
export default UserRepos;