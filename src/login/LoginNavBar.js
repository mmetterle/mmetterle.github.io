import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input } from 'react-bootstrap';

export default class LoginNavBarComponent extends React.Component {

	render() {
	      
		return (
			<Navbar inverse fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">CRM Login</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
					    <NavItem eventKey={1} href="#">Register</NavItem>
						<NavItem eventKey={2} href="#">Sign in</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}