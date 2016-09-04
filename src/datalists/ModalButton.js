import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Table, Pagination, PageHeader, Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input, Modal } from 'react-bootstrap';
import MyModal from './ModalWindow';
		
export default class ModalButton extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}	
	
	handleHideModal(){
		this.setState({ showModal: false });
	}

	handleShowModal(){
		this.setState({view: {showModal: true}})
	}

	render() {
		return (
			<ButtonToolbar>
				<Button bsStyle="primary" onClick={()=>this.setState({ showModal: true })}>
					Add Contact
				</Button>
				<MyModal show={this.state.showModal} onHide={this.handleHideModal.bind(this)} />
			</ButtonToolbar>
		)
	}
}



