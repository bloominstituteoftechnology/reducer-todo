import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';

//This file will hold state and render components
function App() {
	const [state, dispatch] = useReducer(reducer, initialState); //this came from reducer.js
	console.log('state', state.todoArray);
	return (
		<div>
			<TodoList todoArray={state.todoArray} />
		</div>
	);
}

export default App;
