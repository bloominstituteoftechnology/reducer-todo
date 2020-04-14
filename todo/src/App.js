import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//This file will hold state and render components
function App() {
	const [state, dispatch] = useReducer(reducer, initialState); //this came from reducer.js
	console.log('state', state.todoArray);
	const addItem = (e, item) => {
		e.preventDefault();
		const newItem = {
			name: item,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newItem],
		});
	};
	return (
		<div>
			<TodoList todoArray={state.todoArray} />
			<TodoForm addItem={addItem} />
		</div>
	);
}

export default App;
