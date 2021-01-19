import React, { useReducer, useState } from "react";
import reducer, { initialState } from "../Reducers/index";
import { createTodo, doneTodo, clearedTodo } from "../Actions/index";
import { TodoList } from "./Todo";
import TodoForm from "./TodoForm";

export const Todos = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [values, setValues] = useState("");

	const handleChange = (e) => {
		setValues(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createTodo(values));
		setValues("");
	};

	const handleClear = (e) => {
		e.preventDefault();
		dispatch(clearedTodo);
	};

	const handleComplete = (e) => {
		dispatch(doneTodo(e));
	};

	return (
		<div className="outer-bounding-box">
			<div className="list-bounding-box">
				<h1>Daily To-Dos</h1>
				<TodoForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					input={values}
				/>
				<button className="submit-btn" onClick={(e) => handleClear(e)}>
					Clear Completed
				</button>
				<TodoList todos={state} handleComplete={handleComplete} />
			</div>
		</div>
	);
};
