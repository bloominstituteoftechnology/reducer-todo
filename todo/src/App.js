import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//This file will hold state and render components
function App() {
	const [state, dispatch] = useReducer(reducer, initialState); //this came from reducer.js
	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: item });
	};
	const toggleTodo = (id) => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
	};

	const clearCompleted = () => {
		dispatch({ type: 'CLEAR_COMPLETED' });
	};
	return (
		<div>
			<TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
			<TodoForm addItem={addItem} clearCompleted={clearCompleted} />
		</div>
	);
}

export default App;
