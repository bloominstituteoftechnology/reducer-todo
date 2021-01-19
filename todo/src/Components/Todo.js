import React from "react";

export const TodoList = ({ todos, handleComplete }) => {
	return (
		<div className="todo=wrapper">
			{todos.todos === "" ? (
				<div>Fetching Tasks...</div>
			) : (
				<div>
					{todos.todos.map((item) => {
						return (
							<div className="todo-container" key={item.id}>
								<p>{item.item}</p>
								<button
									className="complete-btn"
									onClick={handleComplete}
									id={item.id}
								>
									Finished!{" "}
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
