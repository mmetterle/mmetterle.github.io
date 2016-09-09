import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router';
import LoginPage from '../login/LoginForm';
import AppHistory from './AppHistory';
import BaseLayout from '../Dashboard/BaseLayout';
import DashboardLayout from '../Dashboard/DashboardLayout';
import DashboardHomePage from '../Dashboard/DashboardHome';
import ContactListPage from '../datalists/ContactsList';
import DonorListPage from '../datalists/DonorsList';
import ConnectorListPage from '../datalists/ConnectorsList';
import LeadListPage from '../datalists/LeadsList';

export default class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route name="base" path="/" component={BaseLayout}>
					<IndexRoute component={LoginPage} />
					<Route name="login" path="/login" component={LoginPage}/>
					<Route path="/home" component={DashboardLayout}>	
						<IndexRoute component={DashboardHomePage} />
						<Route path="/contactList" component={ContactListPage} />
						<Route path="/donorList" component={DonorListPage} />
						<Route path="/connectorList" component={ConnectorListPage} />
						<Route path="/leadList" component={LeadListPage} />
					</Route>
				</Route>
			</Router>
		)
	}
}

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)
