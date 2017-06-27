import React, { Component } from 'react';

class DonePage extends Component {
	constructor(props) {
		super(props);

		this.state = {lastDistraction: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		console.log("Distraction incoming: " + event.target.value);
		this.setState({lastDistraction: event.target.value})
	}

	handleSubmit(event) {
		this.props.onTaskStop();
	}

	render() {
		return (
			<div>
				<h3 className="DonePage uk-form-row">Got distracted?</h3>
				<button className="uk-button uk-button-large" value="Email" onClick={this.handleChange}>Email</button>
				<button className="uk-button uk-button-large" value="Facebook" onClick={this.handleChange}>Facebook</button>
				<button className="uk-button uk-button-large" value="Reddit" onClick={this.handleChange}>Reddit</button>
				<button className="uk-button uk-button-large" value="Netflix" onClick={this.handleChange}>Netflix</button>
				<button className="uk-button uk-button-large" value="YouTube" onClick={this.handleChange}>YouTube</button>
				<form className="uk-form" onSubmit={this.handleSubmit} >
					<h3 className="DonePage uk-form-row">Done working on '{this.props.taskName}'?</h3>
					<input type="submit" value="WOOHOO! DONE!" className="uk-button uk-button-large uk-button-success" />
				</form>
			</div>
		)
	}
}

export default DonePage;