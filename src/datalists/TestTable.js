var classNames = require('classnames');
import React, { PropTypes, Component } from 'react';
import {Table, Form, ButtonToolbar, OverlayTrigger, Modal, Popover, Pagination, Panel, Accordion, Well, Button, PageHeader} from "react-bootstrap";

export default class TableComponent extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
	
		return (
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Job Title</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>James</td>
						<td>Matman</td>
						<td>Chief Sandwich Eater</td>
					</tr>
					<tr>
						<td>The</td>
						<td>Tick</td>
						<td>Crimefighter Sorta</td>
					</tr>
				</tbody>
			</table>
		)
	}
}