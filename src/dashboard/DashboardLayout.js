import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router'
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import $ from "jquery";
import classNames from "classnames";
import LoginPage from '../login/LoginForm';


export default class DashboardLayout extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			tableElementsCollapsed: true,
			uiElementsCollapsed: true,
			chartsElementsCollapsed: true,
			multiLevelDropdownCollapsed: true,
			thirdLevelDropdownCollapsed: true,
			samplePagesCollapsed: true
		}
	}		

	componentWillMount() {
		this.setState({Height: $(window).height()});
	}

	componentDidMount() {

	}

	componentWillUnmount(){
    
		$(window).unbind('resize',this.adjustResize);

	}

	render() {
		return (
			<div id="wrapper" className="content">
				<Navbar inverse fluid>
					<Navbar.Header>
						<Navbar.Brand alt="Demo App" title="Demo App" >
							<a href="#">Welcome John!</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavDropdown eventKey={1} title="Settings" id="basic-nav-dropdown">
								<MenuItem eventKey={1.1}>
									User Profile
								</MenuItem> 
								<MenuItem eventKey={1.2}>
									Settings
								</MenuItem> 
								<MenuItem divider />							
								<LinkContainer to="/login">
									<MenuItem eventKey={1.3}>Logout</MenuItem>    
								</LinkContainer>  
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}