var React = require('react');
var ReactDOM = require('react-dom');
var JobsList = React.createClass({
	removeJob: function(index) {
		this.props.removeJob(index);
	},
	render: function() {
		var jobItems = this.props.jobs.map(function(job, index) {
			return (
				<div className="job-item" key={index}>
					<span className="btn-remove glyphicon glyphicon-trash"
					onClick={this.removeJob.bind(null, index)}></span>
					{job}
				</div>
			);
		}, this);

		return (
			<div className="jobs-list">
				{jobItems}
			</div>
		);
	}
});

module.exports = JobsList;