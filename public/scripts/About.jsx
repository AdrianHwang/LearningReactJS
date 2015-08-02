var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
    render () {
        return (
            <div>
                <h1>About</h1>
                <a href="#about/profile">profile</a>
                <RouteHandler/>
            </div>
        )
    }
});
module.exports=About;