import React from 'react';

const TodoList = ({ todoArray }) => {
	return (
		<div>
			<h1>Todo List:</h1>

			{todoArray.map((todo) => {
				return <p> {todo.item} </p>; //This somehow works
			})}
		</div>
	);
};
export default TodoList;
