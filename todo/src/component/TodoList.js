import React from 'react';
import { Todo } from './Todo';

export function TodoList(props) {	
	//console.log("TodoList.js ~ ", props);

	return(
		<div className="list">
			{props.state.map((item) => {
				return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
			})}
		</div>
	)
}