import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Table, Pagination, PageHeader, Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input, Modal } from 'react-bootstrap';
import TableComponent from '../common/TableComponent';
import ModalButton from './ModalButton';

	var CONTACTS = [
		{locationName: 'Sporting Goods', type: 'Active', status: 'Connector', price: '$49.99', stocked: true, name: 'Andrew West'},
		{locationName: 'Sporting Goods', type: 'Active', status: 'Lead', price: '$9.99', stocked: true, name: 'Chris Page'},
		{locationName: 'Sporting Goods', type: 'Inactive', status: 'Donor', price: '$29.99', stocked: false, name: 'Elizabeth W'},
		{locationName: 'Electronics', type: 'Active', status: 'Lead', price: '$99.99', stocked: true, name: 'Sean DeSean'},
		{locationName: 'Electronics', type: 'Closed', status: 'Lead', price: '$399.99', stocked: false, name: 'Shelly Green'},
		{locationName: 'Electronics', type: 'Active', status: 'Donor', price: '$199.99', stocked: true, name: 'Tim Roth'}
	];
	

		
export default class ContactsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}	
	
	
	render() {
		
		let smClose = () => this.setState({ showModal: false });
		
		return (
		
			<div className="col-lg-12"> 
				<PageHeader>Contact List</PageHeader> 
				<Panel header="Panel heading without title">
					<ModalButton/>
					{' '}
					<div className="dataTable_wrapper">
						<TableComponent rows={CONTACTS}/>
					</div>
				</Panel>
				<div className="row">
					<div className="col-sm-6">
						<div className="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
					</div>
					<div className="col-sm-6">
						<Pagination activePage={1}
							items={6}
							first={true} last={true}
							prev={true} next={true}
							onSelect={ (pageNumber) => {} } />
					</div>
				</div>
			</div>	
		)
	}
}