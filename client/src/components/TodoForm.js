import React, { useReducer, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { reducer, initialState } from '../reducers/reducer';
import AppContext from '../contexts/AppContext';
//`<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//- Your input field should take in user input, and allow a user to press `Enter`
// or click on the `Submit Button` to add a todo to your list.
//- Once a todo is submitted, the Todo List should re-render and show the added todo.
//Look into themes for React
const TodoForm = (props) => {
	const [input_text, setInput_Text] = useState('')
	//const [appState, dispatch] = useReducer(reducer, initialState);
	const { appState, dispatch } = useContext(AppContext);
	const handleChanges = el => {
		setInput_Text(el.target.value);
	};
	const handleSubmit = el => {
		el.preventDefault();
		console.log('Submitted Items');
		dispatch({
			type: 'ADD_ITEM',
			payload: {
				item: input_text,
				completed: false,
				id: Date.now()
			}
		})
		setInput_Text('');
		console.log(appState)
	};

	return (
		<Container>
			<form onSubmit={el => handleSubmit(el)}>
				<TextField
					id="TodoForm"
					label="Todo Item"
					variant="outlined"
					value={input_text}
					onChange={handleChanges}
				/>
				<Button onClick={handleSubmit}>Submit</Button>
			</form>
		</Container>
	);
}
export default TodoForm;
