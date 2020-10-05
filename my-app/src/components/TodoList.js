import React, { useReducer, useState } from 'react';
import { todo, reducer } from '../reducers/reducer';

export default function TodoList() {
	const [ state, dispatch ] = useReducer(reducer, todo);
	const [ todoItem, setTodo ] = useState('');

	const handleChanges = (e) => {
		e.preventDefault();
		setTodo(e.target.value);
	};

	let header =
		state.length === 0 ? (
			<h1>Congrats! You have no todos. Take a break!</h1>
		) : (
			<h3>Number of Todos: {state.length}</h3>
		);

	return (
		<div>
			<div>
				<input className="input" type="text" name="todo" onChange={handleChanges} />
				<button type="submit" onClick={() => dispatch({ type: 'ADD_TODO', payload: todoItem })}>
					Add Todo
				</button>

				<button onClick={() => dispatch({ type: 'REMOVE_COMPLETED' })}>Remove completed.</button>
				<button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>Remove all.</button>
			</div>
			<div>{header}</div>
			{state.map((item) => {
				return (
					<div>
						{!item.completed ? (
							<div>
								<h1 onClick={() => dispatch({ type: 'COMPLETE', payload: item.id })}>{item.item}</h1>
							</div>
						) : (
							<div>
								<h1
									className="completed"
									onClick={() => dispatch({ type: 'COMPLETE', payload: item.id })}
								>
									{item.item}
								</h1>
							</div>
						)}
					</div>

					// <div>
					// 	<h1>{item.item}</h1>
					// 	<button>Complete</button>
					// </div>
				);
			})}
		</div>
	);
}