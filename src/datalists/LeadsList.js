import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Table, Pagination, PageHeader, Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input, Modal } from 'react-bootstrap';
import TableComponent from '../common/TableComponent';
import ModalButton from './ModalButton';

	var LEAD_ROWS = [
		{activeDate: '07/26/2015', type: '$1,500', status: 'Active', price: '$1,500', name: 'Andrew West'},
		{activeDate: '1/13/2016', type: '$1,250', status: 'Inactive', price: '$1,250', name: 'Chris Page'},
		{activeDate: 'N/A', type: '$800', status: 'Active', price: '$800', name: 'Elizabeth W'},
		{activeDate: 'N/A', type: '$500', status: 'Closed', price: '$500', name: 'Sean DeSean'},
		{activeDate: '04/12/2016', type: '$100', status: 'Active', price: '$100', name: 'Shelly Green'},
		{activeDate: '03/12/2014', type: '$200', status: 'Inactive', price: '$200', name: 'Tim Roth'}
	];
	
	var LEAD_COLUMNS = [
		{label: "Lead", classname:"col-lg-3 col-md-6", tableIndex: "1", ariaControls: "dataTables-example", ariaLabel:"Rendering engine: activate to sort column descending", rowspan: "1", colspan:"1", width: 265 },
		{label: "Amount", classname: "col-lg-3 col-md-6", tableIndex: "2", ariaControls: "dataTables-example", ariaLabel: "Browser: activate to sort column ascending", rowspan: "1", colspan:"1", width: 265 },
		{label: "Status", classname: "col-lg-3 col-md-6", tableIndex: "3", ariaControls: "dataTables-example", ariaLabel: "Platform(s): activate to sort column ascending", rowspan: "1", colspan: "1", width: 265},
		{label: "Date Active", classname: "col-lg-3 col-md-6", tableIndex: "4", ariaControls: "dataTables-example", ariaLabel: "Platform(s): activate to sort column ascending", rowspan: "1", colspan: "1", width: 265}
	];
		
export default class DonorsComponent extends Component {

	constructor(props) {
		super(props);
	}	
		
	render() {
		
		return (
		
			<div className="col-lg-12"> 
				<PageHeader>Leads List</PageHeader> 
				<Panel header="Panel heading without title">
					<ModalButton/>
					{' '}
					<div className="dataTable_wrapper">
						<TableComponent columns={LEAD_COLUMNS} rows={LEAD_ROWS}/>
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