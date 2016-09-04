var classNames = require('classnames');
import React, { PropTypes, Component } from 'react';
import {Form, ButtonToolbar, OverlayTrigger, Modal, Popover, Pagination, Panel, Accordion, Well, Button, PageHeader} from "react-bootstrap";

export default class SearchBarComponent extends Component {
	
	handleChange() {
		this.props.onUserInput (
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		)
	}
	
	render() {
		return (
			<Form role="form" >
				<div className="form-group">
					<input
						type="text"
						className="form-control" 
						aria-controls="dataTables-example"
						value={this.props.filterText}
						ref="filterTextInput"
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<p/>
			</Form>
		)
	}
}