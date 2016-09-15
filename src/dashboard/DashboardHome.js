import React, { PropTypes, Component } from 'react';
import {Link} from "react-router";
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

import StatWidget from "../common/StatWidget";

export default class Home extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-12">
						<PageHeader>Welcome John Smith</PageHeader>
						<Link to="/contactList">
							<span>Contact List</span>
						</Link>
					</div>
				</div>
				
				<div className="row">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="26"
								headerText="Top Donors" 
								linkTo="/donorList"
							/>  
						</div>
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="22"
								headerText="Top Connectors" 
								linkTo="/connectorList"
							/>                             
						</div>
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="21"
								headerText="Best Performing Locations" 
								linkTo="#"
							/>                           
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="43"
								headerText="List of Leads" 
								linkTo="/leadList"
							/>   
						</div>
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="12"
								headerText="Task List" 
								linkTo="/taskList"
							/>   
						</div>
						<div className="col-lg-3 col-md-6">
							<StatWidget style="primary"
								count="7	"
								headerText="Generate Report" 
								linkTo="#"
							/>    
						</div>
					</div>
				</div>
			</div>
		)
	}
}