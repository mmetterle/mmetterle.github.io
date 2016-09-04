import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router'
import { Form, FormGroup, FormControl, Row, Col, ControlLabel, Checkbox, Button, HelpBlock } from 'react-bootstrap'

import FieldGroup from "../common/FieldGroup";
import DatePicker from "react-bootstrap-date-picker";

export default class AddContactForm extends Component {
	
	constructor(props) {
		super(props);
		var value = new Date().toISOString();		
		this.state = {			
			value: value
		}
	}	
	
	handleChange(value) {
		
		this.setState({
			value: value
		});
	}

	render() {
		return (
			<Form inline>
				<FormGroup controlId="formControlsTextName">
					<ControlLabel>Name</ControlLabel>
						{' '}
					<FormControl componentClass="text" placeholder="=name"/>
				</FormGroup>
				
				<FormGroup controlId="formControlsTextOrg">
					<ControlLabel>Organization</ControlLabel>
						{' '}
					<FormControl componentClass="text" placeholder="=organization"/>
				</FormGroup>
				
				<FormGroup controlId="formControlsSelectType">
					<ControlLabel>Type</ControlLabel>
						{' '}
					<FormControl componentClass="select" placeholder="select">
						<option value="donor">Donor</option>
						<option value="lead">Lead</option>
						<option value="connector">Connector</option>
					</FormControl>
				</FormGroup>
				
				<FormGroup controlId="formControlsTextarea">
					<ControlLabel>Event Details</ControlLabel>
						{' '}
					<FormControl componentClass="textarea" placeholder="textarea" />
				</FormGroup>
				
				<FormGroup controlId="formControlsSelectLocation">
					<ControlLabel>Location</ControlLabel>
					 {' '}
					<FormControl componentClass="select" placeholder="select">
						<option value="value1">Flingers</option>
						<option value="value2">Chachkies</option>
						<option value="value3">Initech</option>
					</FormControl>
				</FormGroup>
				
				<FormGroup controlId="formControlsSelectConnector">
					<ControlLabel>Connector</ControlLabel>
						{' '}
					<FormControl componentClass="select" placeholder="select">
						<option value="value1">Sam Jones</option>
						<option value="value2">Laura Brimley</option>
						<option value="value3">Michael Bolton</option>
					</FormControl>
				</FormGroup>
				
				<FormGroup>
					<ControlLabel>Date</ControlLabel>
						{' '}
					<DatePicker value={this.state.value} onChange={this.handleChange.bind(this)} />
				</FormGroup>
			
				<FormGroup controlId="formHorizontalEmail">
					<ControlLabel>Email</ControlLabel>
						{' '}
					<FormControl type="email" placeholder="Email" />
				</FormGroup>

				<FormGroup controlId="formHorizontalPhone1">
					<ControlLabel>Phone 1</ControlLabel>
						{' '}
					<FormControl type="text" placeholder="Phone1" />
				</FormGroup>
				
				<FormGroup controlId="formHorizontalPhone2">
					<ControlLabel>Phone 2</ControlLabel>
						{' '}
					<FormControl type="text" placeholder="Phone2" />
				</FormGroup>
				
				<FormGroup controlId="formHorizontalAmount">
					<ControlLabel>Amount</ControlLabel>	
						{' '}
					<FormControl type="text" placeholder="amount" />
				</FormGroup>
				
				<FormGroup controlId="formControlsSelectStatus">
					<ControlLabel>Status</ControlLabel>
						{' '}
					<FormControl componentClass="select" placeholder="select">
						<option value="value1">New</option>
						<option value="value2">Active</option>
						<option value="value3">Inactive</option>
						<option value="value4">Closed</option>
					</FormControl>
				</FormGroup>
				
				<FormGroup controlId="formControlsTextarea2">
					<ControlLabel>Notes</ControlLabel>
						{' '}
					<FormControl componentClass="textarea" placeholder="notes" />
				</FormGroup>
			</Form>
		)
	}
}
