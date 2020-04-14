import React from 'react';
const TodoList = ({ todoArray, toggleTodo }) => {
	return (
		<div>
			<h1>Todo List:</h1>
			{todoArray.map((todo) => (
				<div
					key={todo.id}
					onClick={() => toggleTodo(todo.id)}
					className={todo.completed ? 'completed' : ''}
					style={{
						textDecoration: todo.completed ? 'line-through' : 'none',
					}}>
					{todo.item}
				</div>
			))}
		</div>
	);
};

export default TodoList;
