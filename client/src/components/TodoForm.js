import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { reducer, initialState } from './reducers/reducer';
//`<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//- Your input field should take in user input, and allow a user to press `Enter`
// or click on the `Submit Button` to add a todo to your list.
//- Once a todo is submitted, the Todo List should re-render and show the added todo.
//Look into themes for React
const TodoForm = (props) => {
	const [input_text, setInput_Text] = useState('')

	handleChanges = el => {
		setInput_Text(el.target.value);
	};
	handleSubmit = el => {
		el.preventDefault();
		console.log('Submitted Items');

		//this.props.addItem(this.state.input_text);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit()}>
				<TextField
					id="TodoForm"
					label="Todo Item"
					variant="outlined"
					value={this.state.groceryText}
					onChange={this.handleChanges}
				/>
				<Button onClick={this.handleSubmit}>Submit</Button>
			</form>
		</Container>
	);
}
export default TodoForm;
