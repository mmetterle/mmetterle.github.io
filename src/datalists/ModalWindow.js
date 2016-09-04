import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Table, Pagination, PageHeader, Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input, Modal } from 'react-bootstrap';
import TableComponent from '../common/TableComponent';
import AddContactForm from '../forms/AddContactForm';

export default class ModalComponent extends Component {

	render() {
		return (
			<Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-sm">Add Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddContactForm/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Save</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}