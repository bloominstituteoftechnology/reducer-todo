import React from 'react';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
const Todo = props => {
	return (
		<Container>
			<p>
				<Checkbox onClick={() => props.checkItem(props.item.id)} />
				{props.item.name}
			</p>
		</Container>
	);
};

export default Todo;
