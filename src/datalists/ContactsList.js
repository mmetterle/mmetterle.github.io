import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Table, Pagination, PageHeader, Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input, Modal } from 'react-bootstrap';
import TableComponent from '../common/TableComponent';
import ModalButton from './ModalButton';

	var CONTACT_ROWS = [
		{locationName: 'Sporting Goods', status: 'Active', type: 'Connector', price: '$49.99', stocked: true, name: 'Andrew West'},
		{locationName: 'Sporting Goods', status: 'Active', type: 'Lead', price: '$9.99', stocked: true, name: 'Chris Page'},
		{locationName: 'Sporting Goods', status: 'Inactive', type: 'Donor', price: '$29.99', stocked: false, name: 'Elizabeth W'},
		{locationName: 'Electronics', status: 'Active', type: 'Lead', price: '$99.99', stocked: true, name: 'Sean DeSean'},
		{locationName: 'Electronics', status: 'Closed', type: 'Lead', price: '$399.99', stocked: false, name: 'Shelly Green'},
		{locationName: 'Electronics', status: 'Active', type: 'Donor', price: '$199.99', stocked: true, name: 'Tim Roth'}
	];
	
	var CONTACT_COLUMNS = [
		{label: "Contact", classname:"col-lg-3 col-md-6", tableIndex: "1", ariaControls: "dataTables-example", ariaLabel:"Rendering engine: activate to sort column descending", rowspan: "1", colspan:"1", width: 265 },
		{label: "Type", classname: "col-lg-3 col-md-6", tableIndex: "2", ariaControls: "dataTables-example", ariaLabel: "Browser: activate to sort column ascending", rowspan: "1", colspan:"1", width: 265 },
		{label: "Status", classname: "col-lg-3 col-md-6", tableIndex: "3", ariaControls: "dataTables-example", ariaLabel: "Platform(s): activate to sort column ascending", rowspan: "1", colspan: "1", width: 265}
	];
		
export default class ContactsComponent extends React.Component {

	constructor(props) {
		super(props);
	}	
		
	render() {
		
		return (
		
			<div className="col-lg-12"> 
				<PageHeader>Contact List</PageHeader> 
				<Panel header="Panel heading without title">
					<ModalButton/>
					{' '}
					<div className="dataTable_wrapper">
						<TableComponent columns={CONTACT_COLUMNS} rows={CONTACT_ROWS}/>
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