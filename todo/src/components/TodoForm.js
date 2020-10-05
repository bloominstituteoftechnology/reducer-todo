import React, { useReducer, useState } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "addTodo":
			return {
				todos: [
					...state.todos,
					{ text: action.payload, completed: false, id: Date.now() },
				],
			};
		case "toggleTodo":
			return {
				todos: state.todos.map((todo, i) =>
					i === action.i ? { ...todo, complete: !todo.completed } : todo
				),
			};
		default:
			return state;
	}
}

export default function TodoForm() {
	const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
	const [text, setText] = useState();

	return (
		<div>
			<h2>Create a todo here!</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch({ type: "addTodo", payload: text });
					setText("");
				}}>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type="text"
					name="todo"
				/>
				<button onClick={() => dispatch({ type: "addTodo" })}>Add Todo</button>
			</form>
			{todos.map((todo, i) => (
				<div
					key={todo.id}
					onClick={() => dispatch({ type: "toggleTodo", i })}
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
					{todo.text}
				</div>
			))}
		</div>
	);
}
