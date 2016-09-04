import React from 'react';

export default class InputCheckbox extends React.Component {
	constructor(props) {
		super(props);
	}
    render() {
        return ( 
		     <input checked={this.props.checked} type="checkbox" {...this.props} /> 
		);
    }
}

InputCheckbox.defaultProps = {
	checked: false
};