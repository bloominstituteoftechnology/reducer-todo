import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
	console.log("props =====> ", props);
	return (
		<div>
			{props.todoList.map((item) => {
				return (
					<Todo
						key={item.id}
						item={item}
						toggleItem={props.toggleItem}
					/>
				);
			})}

			<button onClick={props.clearCompleted} className="clearButton">
				Clear Completed Items
			</button>
		</div>
	);
};

export default TodoList;
