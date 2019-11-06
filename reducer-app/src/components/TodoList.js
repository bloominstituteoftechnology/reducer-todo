import React from "react";
import TodoComponent from "./TodoComponent";
import "./TodoList.styles.css";

import {ReactComponent as FireIcon} from '../onFire.svg'

function TodoList(props) {
	console.log(props);
	return (
		<div className="ok">
            {props.todos.length ? (props.todos.map(todo => {
				return (
					<TodoComponent todo={todo} toggleComplete={props.toggleComplete} />
				);
			})) : (
				<div className='fire'>
                    <span>All done.</span>
                    <FireIcon className='fireIcon'/> 
                    <span className="empty-message"> You're on fire today!</span>
		</div>	)}
            
           
		</div>
	);
}

export default TodoList;
