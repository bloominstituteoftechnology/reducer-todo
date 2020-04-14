import React, { useState } from 'react';

const TodoForm = (props) => {
	const [item, setItem] = useState('');
	const { addItem } = props;
	const handleChange = (event) => setItem(event.target.value);
	const submitItem = (e) => {
		//e.preventDefault();
		addItem(item);
		setItem('');
	};
	return (
		<div>
			<form onSubmit={submitItem}>
				<input
					type="text"
					name="item"
					value={item}
					onChange={handleChange}
					placeholder="Add Todo"
				/>
				=>
				<button>Add +</button>
			</form>
		</div>
	);
};

export default TodoForm;
