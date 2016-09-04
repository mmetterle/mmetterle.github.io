import React from 'react';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';

export default class StatWidget {
	render() {
		return (
		<div>
			<Panel bsStyle={this.props.style}
				header={<div className="row">
							<div className="col-xs-3">
							</div>
							<div className="col-xs-9 text-right">
								<div>{this.props.count}</div>
								<div>{this.props.headerText}</div>
							</div>
						</div>}

				footer={<Link to={this.props.linkTo}>
							<span className="pull-left">{this.props.footerText}</span>
							<span className="pull-right"></span>
						</Link>}>					
			</Panel>   
		</div>
		)
	}
}