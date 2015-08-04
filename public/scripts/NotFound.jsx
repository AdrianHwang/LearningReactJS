var React =  require('react');
var Router =  require('react-router');

var RouteHandler = Router.RouteHandler;

var NotFound = React.createClass({
	render () { 
		return (
				<div>
				<h1> Not Found</h1>
				</div>
			)
	}
}) 

module.exports = NotFound;