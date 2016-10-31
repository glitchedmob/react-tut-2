import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.pushState(null, "/");
	}

	render() {
		return (
			<div>
				<h1>KillerNews.net</h1>
				{this.props.children}
				<Link to="archives" class="btn btn-default">Archives</Link>
				<Link to="settings" class="btn btn-default">Settings</Link>
				<button class="btn btn-default" onClick={this.navigate.bind(this)}>Featured</button>
			</div>
		);
	}
}