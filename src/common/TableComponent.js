var classNames = require('classnames');
import React, { PropTypes, Component } from 'react';
import {Table, Form, ButtonToolbar, OverlayTrigger, Modal, Popover, Pagination, Panel, Accordion, Well, Button, PageHeader} from "react-bootstrap";
import InputCheckbox from './inputCheckBox';
import SearchBar from "./SearchBar"

export default class TableComponent extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false,
			checked: [false, false, false, false, false, false, false, false, false, false]
		}
	}
	
	render() {
	
		var rows = [];
		var idx = 0;
		
		this.props.rows.forEach(function(row) {
			
			rows.push(
				<tr key={row.name} role="row">
					<td><InputCheckbox checked={false}/></td>
					<td><a href="#">{row.name}</a></td>
					<td>{row.type}</td>
					<td>{row.status}</td>
				</tr>	  
			)		
			idx++;
		}.bind(this));
	
		return (
			<Table responsive striped bordered condensed hover role="grid">
				<thead>
					<tr role="row">
						<th rowSpan="1" colSpan="1" style={ {width: 50} } ><InputCheckbox checked={false}/></th>
						<th className="sorting_asc" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style={ {width: 265} }>Contact</th>
						<th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={ {width: 321} }>Type</th>
						<th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending" style={ {width: 299} }>Status</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		)
	}
}