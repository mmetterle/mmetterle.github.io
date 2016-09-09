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
		var columns = [];
		
		this.props.rows.map(function(row){
			rows.push(	
				<tr key={row.name} role="row">
					<td><InputCheckbox checked={false}/></td>
					<td className="col-lg-3 col-md-6"><a href="#">{row.name}</a></td>
					<td className="col-lg-3 col-md-6">{row.type}</td>
					<td className="col-lg-3 col-md-6">{row.status}</td>
					<td className="col-lg-3 col-md-6">{row.activeDate}</td>
				</tr>	 
			)                     
		}.bind(this));	
		
		this.props.columns.map(function(column){
			columns.push(	
				<th key={column.tableIndex} className={column.classname} tabIndex={column.tableIndex} aria-controls={column.ariaControls} colSpan={column.colspan} rowSpan={column.rowspan} style={{ width: 265 }}>{column.label}</th>
			)                     
		}.bind(this));	
	
		return (
			<Table responsive striped bordered condensed hover role="grid">
				<thead>
					<tr role="row">
						<th rowSpan="1" colSpan="1" style={ {width: 50} } ><InputCheckbox checked={false}/></th>
							{columns}
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		)
	}
}