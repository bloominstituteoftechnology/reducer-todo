import React from 'react';
const TodoList = ({ todoArray, toggleTodo }) => {
	return (
		<div className="form">
			<h1>You got things to do:</h1>
			{todoArray.map((todo) => (
				<div
					key={todo.id}
					onClick={() => toggleTodo(todo.id)}
					className={todo.completed ? 'completed' : ''}
					style={{
						textDecoration: todo.completed ? 'line-through' : 'none',
					}}>
					<h3 className="form">{todo.item}</h3>
					{/* {todo.time} */}
				</div>
			))}
		</div>
	);
};

export default TodoList;
