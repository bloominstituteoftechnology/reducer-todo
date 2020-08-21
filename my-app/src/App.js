import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
// import TodoListForm from './components/TodoListForm';

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			{/* <TodoListForm /> */}
			<TodoList />
		</div>
	);
}

export default App;