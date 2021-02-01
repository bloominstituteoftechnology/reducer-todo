import React, { Component } from "react";

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			item: "",
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ item: " " });
		this.props.addItem(e, this.state.item);
	};

	render() {
		return (
			<div className="formDiv">
				<form onSubmit={this.handleSubmit}>
					<input
						htmlFor="item"
						id="item"
						name="item"
						type="text"
						value={this.state.item}
						onChange={this.handleChange}
						className="inputStyle"
					/>
					<button>ADD</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
