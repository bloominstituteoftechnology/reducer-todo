import React, { useReducer, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todoReducer from './reducers/reducer';
// import initialState from './reducers/reducer';

const initialState = {
	todos: [
		{
			item: 'Learn reducers',
			completed: false,
			id: Date.now()
		}
	]
};

function App() {
	// const [todos, setTodos] = useState({});
	const [newTodo, setNewTodo] = useState('');
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const changeHandler = e => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: newTodo });
		setNewTodo('');
	};

	console.log(state.todos);

	return (
		<div className="App">
			<h1>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<input className="todo__input" type="text" value={newTodo} onChange={changeHandler} />
				<button disabled={!newTodo} type="submit">
					ADD
				</button>
			</form>
			<div>
				<TodoList todos={state.todos} dispatch={dispatch} />
			</div>
		</div>
	);
}

export default App;
