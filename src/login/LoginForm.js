import React, { PropTypes, Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { Form, FormGroup, Checkbox, ControlLabel, ButtonToolbar, FormControl, Button, Input } from 'react-bootstrap';

import FieldGroup from "../common/FieldGroup";
import LoginNavBar from "./LoginNavBar";
import AppHistory from '../main/AppHistory'

export default class LoginForm extends Component {
	
	constructor(props) {
		super(props);
		this.setLoginID = this.setLoginID.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.state = {
			loginID: '',
			password: '',
			isSubmitted: false
		}
	}
	
	render() {
		return (
			<div className="content-wrapper">
				<LoginNavBar />
				<Form className="form-signin" role="form" onSubmit={this.handleLogin}>
					<h3 className="form-signin-heading">Log In</h3>
					<hr/>

					<FieldGroup
						id="id_login"
						type="text"
						label="Username"
						placeholder="Username or e-mail"
						name="login"
						ref="loginID"
						onChange={this.setLoginID}
					/>
					<FieldGroup
						id="id_password"
						type="password"
						label="Password"
						placeholder="Password"
						name="password"
						ref="password"
						onChange={this.setPassword}
					/>
					<Checkbox>Remember Me</Checkbox>
					<FormGroup>
						<Button bsStyle="primary" type="submit">Sign In</Button>
						<a className="pull-right" href="/accounts/password/reset/">Forgot Password?</a>
					</FormGroup>
				</Form> 
			</div>
		)
	}
   
	setLoginID(e) {
		
		this.setState({
			loginID: e.target.value,
			loginError: ''
		});
	}

	setPassword(e) {

		this.setState({
			password: e.target.value,
			loginError: ''
		});

	}

	handleLogin(e){
	  
		console.log(e);
		
		browserHistory.replace('/home');
		
		// use this for browser history
		//browserHistory.push('/about');

		//return false;
	}

}