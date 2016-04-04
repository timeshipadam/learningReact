/**
 * Created by Adam on 2016-04-03.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render : function() {
        return (
        <p>
        Hello, <input type="text" placeholder="Your name here" />
                It is {this.props.date.toTimeString()}
        </p>
        );
    }
});

setInterval( function(){
ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
    );
    }, 5000);