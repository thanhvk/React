import React from 'react'
import ReactDOM from 'react-dom'
import RouteApp from './RouteApp'

var App = () => (
	<div>
		<h1 className="app-title">React Router</h1>
		<RouteApp />
	</div>
)

ReactDOM.render(<App />, document.getElementById('app'));