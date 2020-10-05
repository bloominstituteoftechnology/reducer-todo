import React from "react";

export default function Todo(props) {
	return (
		<div>
			<h3 className="todo" onClick={props.toggleComplete}>
				{props.todo}
			</h3>
		</div>
	);
}
