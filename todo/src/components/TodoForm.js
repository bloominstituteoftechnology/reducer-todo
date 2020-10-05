import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/todoReducer";
// import Todo from "./Todo";

export default function TodoForm() {
	const [{ todos }, dispatch] = useReducer(reducer, initialState);
	const [text, setText] = useState();
	console.log({ todos });
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setText("");
				}}>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type="text"
					name="todo"
				/>
				<button onClick={() => dispatch({ type: "addTodo", payload: text })}>
					Add Todo
				</button>
				<button onClick={() => dispatch({ type: "deleteTodo" })}>
					Delete Completed
				</button>
			</form>
			{todos.map((todo, i) => (
				<div
					key={todo.id}
					onClick={() => dispatch({ type: "toggleTodo", i })}
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
					<h3>{todo.text}</h3>
				</div>
			))}
		</div>
	);
}
