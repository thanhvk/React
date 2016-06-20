var React = require('react');
var ReactDOM = require('react-dom');
var AddJob = require('./AddJob');
var JobsList = require('./JobsList');

var JobsContainer = React.createClass({
	getInitialState: function() {
		return {
			jobs: ['Don\'t worry', 'Look and Smile', 'Read and Think']
		};
	},
	addJob: function(job) {
		this.setState({
			jobs: this.state.jobs.concat([job])
		});
	},
	removeJob: function(index) {
		this.state.jobs.splice(index, 1);
		this.setState({
			jobs: this.state.jobs
		});
	},
	render: function() {
		return (
			<div>
				<AddJob addJob={this.addJob} />
				<JobsList jobs={this.state.jobs} removeJob={this.removeJob} />
			</div>
		);
	}
});

module.exports = JobsContainer;