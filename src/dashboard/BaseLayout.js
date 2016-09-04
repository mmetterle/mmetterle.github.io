import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router'

export default class BaseComponent extends Component {

	render() {
		return (
			<div id="container">
				{this.props.children}
			</div>
		)
	}
}