import React, { useReducer, useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
//import { reducer, initialState } from './reducers/reducer';
import AppContext from '../contexts/AppContext';
const Todo = props => {
	//const [appState, dispatch] = useReducer(reducer, initialState);
	const { appState, dispatch } = useContext(AppContext);
	const { checked } = props.item_set.completed;

	return (
		<Container>
			<p>
				<Checkbox
					onClick={() => dispatch({ type: "ITEM_COMPLETED", payload: props.item_set.id })}
					checked={checked}
					id={props.item_set.id}
				/>
				{props.item_set.item}
			</p>
		</Container>
	);
};

export default Todo;

