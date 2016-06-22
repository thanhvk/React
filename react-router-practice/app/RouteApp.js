import React, {Component} from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router'

class RouteApp extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact}>
						<IndexRoute component={twitter} />
						<Route path='/facebook' component={facebook} />
						<Route path='/gmail' component={gmail} />
					</Route>
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

const Home = () => <h3>Home Page</h3>
const About = () => <h3>About Page</h3>

const Contact = (props) => (
		<div>
			<h3>Contact Page</h3>
			<NavContact />
			{props.children}
		</div>
	)
const twitter = () => <p>twitter</p>
const facebook = () => <p>facebook</p>
const gmail = () => <p>gmaill</p>
const NavContact = () => (
		<ul className="list-inline nav-contact-menu">
			<li className="nav-contact-item">
				<IndexLink activeClassName='active-contact-custom' to='/contact'><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</IndexLink>
			</li>
			<li className="nav-contact-item">
				<IndexLink activeClassName='active-contact-custom' to='/facebook'><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</IndexLink>
			</li>
			<li className="nav-contact-item">
				<IndexLink activeClassName='active-contact-custom' to='/gmail'><i className="fa fa-google-plus" aria-hidden="true"></i> Google+</IndexLink>
			</li>
		</ul>
	);


const NotFound = () => <h3>404, the page not found!</h3>

const Nav = () => (
		<ul className="list-unstyled">
			<li>
				<IndexLink activeClassName='active-custom' to='/'>Home</IndexLink>
			</li>
			<li>
				<IndexLink activeClassName='active-custom' to='/about'>About</IndexLink>
			</li>
			<li>
				<IndexLink activeClassName='active-custom' to='/contact'>Contact</IndexLink>
			</li>				
		</ul>
	)

const Container = (props) => (
		<div>
			<nav className="sidebar">
				<Nav />
			</nav>
			<section className="content-container">
				{props.children}
			</section>
		</div>
	)

export default RouteApp
