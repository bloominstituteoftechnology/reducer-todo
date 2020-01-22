// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useReducer, useState, useContext } from 'react';
import Todo from './Todo';
import Container from '@material-ui/core/Container';

// import { reducer, initialState } from '../reducers/reducer';
import AppContext from '../contexts/AppContext';
const TodoList = () => {
	//const [appState, dispatch] = useReducer(reducer, initialState);
	const { appState, dispatch } = useContext(AppContext);
	const handleSubmit = el => {
		dispatch({ type: `CLEAR_COMPLETED` });
	}

	return (
		<Container>
			{appState.map(el => (
				<Todo item_set={el} />
			))}

		</Container>
	);
};

export default TodoList;
