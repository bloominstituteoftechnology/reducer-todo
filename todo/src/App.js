import React, { useReducer } from "react";

import {
	todoReducer,
	initialState,
	ADD_ITEM,
	TOGGLE_COMPLETE,
	CLEAR_COMPLETED,
} from "./reducers/todoReducer";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({ type: ADD_ITEM, payload: item });
	};

	const toggleItem = (itemId) => {
		dispatch({ type: TOGGLE_COMPLETE, payload: itemId });
	};

	const clearCompleted = (e) => {
		e.preventDefault();
		dispatch({ type: CLEAR_COMPLETED });
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<TodoForm addItem={addItem} />
			<TodoList
				todoList={state.todoList}
				toggleItem={toggleItem}
				clearCompleted={clearCompleted}
			/>
		</div>
	);
}

export default App;
