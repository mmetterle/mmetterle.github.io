import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Panel, Form, FormGroup, Checkbox, Nav, Navbar, NavItem, ControlLabel, ButtonToolbar, FormControl, Button, Input } from 'react-bootstrap';

export default class StatWidgetComponent extends React.Component {

	render() {
	      
		return (
			<Panel bsStyle="primary"
				header={<div className="row">
							<div className="col-xs-9 text-right">
								<div>{this.props.headerText}</div>
								<div>{this.props.count}</div>								
							</div>
						</div>}>					
			</Panel> 
		)
	}
}







							