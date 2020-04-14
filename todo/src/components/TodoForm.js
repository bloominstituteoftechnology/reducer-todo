import React, { useState } from 'react';

const TodoForm = (props) => {
	const [item, setItem] = useState('');
	const handleChange = (event) => setItem(event.target.value);
	const submitItem = (e) => {
		e.preventDefault();
		setItem('');
	};
	return (
		<div>
			<form onSubmit={submitItem}>
				<input type="text"></input>
				<button>Add +</button>
			</form>
		</div>
	);
};

export default TodoForm;
