import React, { useReducer, useState } from 'react';
import { todo, reducer } from '../reducers/reducer';

export default function TodoListForm() {
	const [ state, dispatch ] = useReducer(reducer, todo);
	const [ todoItem, setTodo ] = useState('');

	const handleChanges = (e) => {
		e.preventDefault();
		setTodo(e.target.value);
	};

	return (
		<div>
			<input className="input" type="text" name="todo" onChange={handleChanges} />
			<button onClick={() => dispatch({ type: 'ADD_TODO', payload: todoItem })}>Add Todo</button>
		</div>
	);
}