import React, { useReducer } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

import { reducer, initialState } from "./reducers/Reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleComplete = id => {
		dispatch({
			type: "TOGGLE_ITEM",
			payload: id
		});
	};

	console.log(state);

	return (
		<div className="App">
			<div className="container">
				<h1>Let's Quest!</h1>
				<TodoList todos={state.todos} toggleComplete={toggleComplete} />
				<Form dispatch={dispatch} />
			</div>
		</div>
	);
}

export default App;
