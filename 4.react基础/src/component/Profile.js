import React, {Component,PropTypes} from 'react';

class Profile extends Component {
    render (){
        let {name, url, id} = this.props;
        console.log(name, url ,id);
        return (
            <div>
                <img src={url} alt=""/>
                <h1> {name} </h1>
                <h2> {id} </h2>
            </div>
        )
    }
}
//限定数据类型
Profile.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
}
//默认值设置
Profile.defaultProps={
    name: 'aa',
    id: '0',
    url: ''
}


export default Profile;