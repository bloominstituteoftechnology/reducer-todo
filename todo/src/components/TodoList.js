import React from 'react';
import Todo from './Todo';

function TodoList({ todos, dispatch }) {
	return (
		<div className="todo__container">
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} dispatch={dispatch} />
			))}
		</div>
	);
}

export default TodoList;
