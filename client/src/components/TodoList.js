// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
const TodoList = props => {
	return (
		<Container>
			{props.todoItems.map(item => (
				<Todo key={item.id} item={item} checkItem={props.checkItem} />
			))}
			<Button onClick={props.clearCompleted}>Clear Completed</Button>
		</Container>
	);
};

export default TodoList;
