var React = require('react');
var ReactDOM = require('react-dom');
var AddJobs = React.createClass({
	addItem: function(event) {
		if (event.keyCode === 13) {
			var newJob = event.target.value;
			event.target.value = '';
			this.props.addJob(newJob);
		}
	},
	render: function() {
		return (
			<div className="add-job">
				<input onKeyDown={this.addItem} className="form-control" type="text" placeholder="New job" />
			</div>
		);
	}
});

module.exports = AddJobs;