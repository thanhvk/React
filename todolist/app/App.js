var React = require('react');
var ReactDOM = require('react-dom');
var JobsContainer = require('./JobsContainer');

var App = React.createClass({
	render: function() {
		return (
				<div className="jobs-container">
					<JobsContainer />
				</div>
			);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
