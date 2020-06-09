import React from 'react';

export function Todo(props) {
	//console.log("Todo.js ~ ", props);

	return(
		<div className='Todo'>
			<h3 className={props.item.completed ? 'completed' : ''}
				onClick={(event) => {
					event.preventDefault();
					props.handleComplete(props.item.id);
				}} >{props.item.todo}</h3>
		</div>
	)

} 
