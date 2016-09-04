import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { Form, FormGroup, ControlLabel, FormControl, Button, Input } from 'react-bootstrap';

export default class FieldGroupComponent extends React.Component {
	
	render() {
		return (
			<FormGroup controlId={this.props.id}>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl {...this.props} />
				{this.placeholder && <HelpBlock>{this.placeholder}</HelpBlock>}
			</FormGroup>
		)
	}
}