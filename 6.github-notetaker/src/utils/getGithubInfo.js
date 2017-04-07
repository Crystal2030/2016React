import axios from 'axios';

/**
 * 获取用户信息
 * @param username
 * @returns {*}
 */
function getUserInfo( username ){
	return axios.get(`https://api.github.com/users/${username}`)
}

/**
 * 获取用户Github仓库信息
 * @param username
 * @returns {*}
 */
function getUserRepos( username ) {
	return axios.get(`https://api.github.com/users/${username}/repos`)
}

function getGithubInfo( username ){
	return axios.all([getUserInfo(username), getUserRepos(username)])
		.then(arr => {
			console.log(arr, 22222);
			let data = {
				userInfo: arr[0],data,
				userRepos: arr[1].data
			}
			return data;
		})
}

export default getGithubInfo;