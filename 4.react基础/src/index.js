var React= require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return <h1>define component use es5.</h1>
    }
})

ReactDOM.render(<App/>, document.getElementById('app'));