import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import * as moment from 'moment';

//This file will hold state and render components
function App() {
	const [state, dispatch] = useReducer(reducer, initialState); //this came from reducer.js
	const addTodo = (item) => {
		dispatch({ type: 'ADD_TODO', payload: item });
		let now = moment().format('LLLL');
		console.log(now);
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
			<TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
		</div>
	);
}

export default App;
