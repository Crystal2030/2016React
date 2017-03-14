import React, {Component} from 'react';

class Range extends Component {
    
    render (){
        const {update} = this.props;
        return (
            <input type="range" min="0" max="100" onChange={update}/>
        )
    }
}


export default Range;




