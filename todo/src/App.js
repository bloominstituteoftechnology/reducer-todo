import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

// function reducer(state, action) {
// 	switch (action.type) {
// 		case "addTodo":
// 			return {
// 				todos: [
// 					...state.todos,
// 					{ text: action.payload, completed: false, id: Date.now() },
// 				],
// 			};
// 		case "toggleTodo":
// 			return {
// 				todos: state.todos.map((todo, i) =>
// 					i === action.i ? { ...todo, completed: !todo.completed } : todo
// 				),
// 			};
// 		default:
// 			return state;
// 	}
// }

function App() {
	// const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
	// const [text, setText] = useState();
	return (
		<div className="App">
			<h2>Create a todo here!</h2>
			<TodoForm />
			{/* <form
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
					style={{ textDecoration: todo.completed ? "line-through" : "" }}>
					{todo.text}
				</div>
			))} */}
		</div>
	);
}

export default App;
