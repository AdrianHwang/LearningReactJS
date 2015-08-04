var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var App = React.createClass({
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="inbox">Inbox</Link>
                    </li>
                    <li><a href="#notfound">notfound</a></li>
                    <li><a href="#redirect">redirect</a></li>
                </ul>
                <h1>App</h1>
                <RouteHandler/>
            </div>
        )
    }
});
module.exports=App; 
