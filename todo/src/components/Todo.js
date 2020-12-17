import React from 'react';

function Todo({ todo, dispatch }) {
	return (
		<div
			onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
			className={`todo ${todo.completed === true ? 'completed' : ''}`}
		>
			<h3>{todo.item}</h3>
		</div>
	);
}

export default Todo;
