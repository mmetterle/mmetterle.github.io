import React, { PropTypes, Component } from 'react';
import {Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";
import InputCheckbox from './inputCheckBox.jsx';

  var LEADS = [
	{locationName: 'Sporting Goods', totalLeads: 10, totalOccurances: 5, price: '$49.99', stocked: true, name: 'General Motors'},
	{locationName: 'Sporting Goods', totalLeads: 5, totalOccurances: 2, price: '$9.99', stocked: true, name: 'Chillis'},
	{locationName: 'Sporting Goods', totalLeads: 8, totalOccurances: 3, price: '$29.99', stocked: false, name: 'Outback Steakhouse'},
	{locationName: 'Electronics', totalLeads: 7, totalOccurances: 6, price: '$99.99', stocked: true, name: 'Mom and Pops Store'},
	{locationName: 'Electronics', totalLeads: 6, totalOccurances: 4, price: '$399.99', stocked: false, name: 'Carrabas'},
	{locationName: 'Electronics', totalLeads: 4, totalOccurances: 3, price: '$199.99', stocked: true, name: 'Old Navy'}
  ];
  

class LeadTable extends React.Component {
	
   constructor(props) {
	 super(props);
     this.state = {
		filterText: '',
        inStockOnly: false,
		checked: [false, false, false, false, false, false, false, false, false, false]
     };
	 this.selectAll = this.selectAll.bind(this)
  }
  
  selectAll(event) {
	// Set all checked states to true
  	this.setState({
    	checked: this.state.checked.map(function() { 
            return event.target.checked 
        })
    });
  }
  
  handleChange(index, event) {
	var checked = this.state.checked;
    checked[index] = event.target.checked;
    
    this.setState({
       checked: checked
    })
  }
  
  render() {
	  
	// Recalculate if everything is checked each render, instead of storing it
    var isAllChecked = this.state.checked.filter(function(c) {
    	return c;
    }).length === this.state.checked.length;
	  
    var rows = [];
	var idx = 0;
	var className = "gradeA odd"
    this.props.leads.forEach(function(lead) {
      if (lead.name.indexOf(this.props.filterText) === -1 || (!lead.stocked && this.props.inStockOnly)) {
        return;	
      }
	  
	  var name = lead.stocked ?
		lead.name :
		<span style={{color: 'red'}}>
			{lead.name}
		</span>;
	  
      rows.push(
	  
		<tr key={lead.name} className={className} role="row">
			<td><InputCheckbox checked={this.state.checked[idx]} onChange={this.handleChange.bind(this, idx)}/></td>
			<td>{name}</td>
			<td>{lead.totalLeads}</td>
			<td>{lead.totalOccurances}</td>
			<td className="center">{lead.price}</td>       
		</tr>	  
	  );
	  
	  idx++;
	  
    }.bind(this));
	
    return (
      <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid">
        <thead>
			<tr role="row">
				<th rowSpan="1" colSpan="1" style={ {width: 50} } ><InputCheckbox onChange={this.selectAll} checked={isAllChecked}/></th>
				<th className="sorting_asc" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style={ {width: 265} }>Location</th>
				<th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={ {width: 321} }>Total Leads</th>
				<th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending" style={ {width: 299} }>Total Occurances</th>
				<th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending" style={ {width: 231} }>Total Donated</th>
			</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
   
class SearchBar extends React.Component {
  handleChange() {
	  this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }
  render() {
    return (
		<form role="form" >
				<div class="form-group">
					<input
						type="text"
						className="form-control" 
						aria-controls="dataTables-example"
						value={this.props.filterText}
						ref="filterTextInput"
						onChange={this.handleChange.bind(this)}
					/>
				</div>
			<p>
				<input
					type="checkbox"
					checked={this.props.inStockOnly}
					ref="inStockOnlyInput"
					onChange={this.handleChange.bind(this)}
				/>
				{' '}
				Only show products in stock
			</p>
		</form>
    );
  }
}


class FilterableLeadTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		filterText: '',
        inStockOnly: false
    };
  }
  
  render() {
	  
    return (
	    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
			<div className="row">
				<div className="col-sm-9">
					<div id="dataTables-example_filter" className="dataTables_filter">
						<label>Search:
							<SearchBar
								filterText={this.state.filterText}
								inStockOnly={this.state.inStockOnly}
							/>
						</label>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="dataTables_length" id="dataTables-example_length">
						<label>Show <select name="dataTables-example_length" aria-controls="dataTables-example" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
					</div>
				</div>
            </div>
			<div className="row">
				<div className="col-sm-12">
					<LeadTable
						leads={this.props.leads}
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
					/>	
                </div>
            </div>
			<div className="row">
				<div className="col-sm-6">
					<div className="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div className="col-sm-6" pullRight >
					<Pagination activePage={1}
						items={6} perPage={10} 
                        first={true} last={true}
                        prev={true} next={true}
                        onSelect={ (pageNumber) => {} } />  
                </div>
            </div>
		</div>
    );
  }
}

export default class Tables extends React.Component {	

  constructor(props) {
    super(props);
    this.state = {
		
    };
  }	

  render() {
	  
    var currentRoutes = this.props.activeRoute._context.router.getCurrentRoutes();
	var lastRoute = currentRoutes[currentRoutes.length - 1];
	console.log(lastRoute.name);  
	  
    return (
		<div>
			<div className="col-lg-12"> 
				<PageHeader>Leads</PageHeader> 
			</div>
			<div className="col-lg-12"> 
				<Panel header={<span>Add Description Here</span>} >
					<div> 
						<div className="dataTable_wrapper">
							<FilterableLeadTable leads={LEADS}/>
						</div>
					</div>
				</Panel>
			</div>
		</div> 
    );
  }
}