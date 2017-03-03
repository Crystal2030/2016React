import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
import { mixin } from 'core-decorators';//core-decorators提供的mixin来做重用模块叠加
import ReactFireMixin from 'reactfire';//react的mixin库，封装了六个组件公共的方法(bindArray,unbind,bindAsObject...)
import Firebase from 'firebase';
import getGithubInfo from '../../util/helper';
/**
 * 我们目前使用的是decorator，但是浏览器不支持这个写法啊，
 * 我们让babel来编译解决这个问题
 * 首先需要下载一个能解析decorator的babel插件，然后在.babelrc里面配置：
 */
console.log("-------" , ReactFireMixin)
@mixin(ReactFireMixin)
class Profile extends Component {
  state = {
    notes: ['1', '2', '3'],
    bio: {
      name: 'guoyongfeng'
    },
    repos: ['a', 'b', 'c']
  }
  componentDidMount(){
    // 为了读写数据，我们首先创建一个firebase数据库的引用
    //创建
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    // 调用child来往引用地址后面追加请求，获取数据
    //  https://github-note-taker.firebaseio.com/guoyongfeng
    var childRef = this.ref.child(this.props.params.username);
    // 将获取的数据转换成数组并且赋给this.state.notes
    this.bindAsArray(childRef, 'notes');

    getGithubInfo( this.props.params.username )
      .then( ( data ) => {
        // 测试一下传入用户名后返回的数据
        console.log( '-------传入用户名后返回的数据-------',data );
        // 更新state数据
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      });
  }
  componentWillUnMount(){
    this.unbind('notes');
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <UserRepos
            username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile
