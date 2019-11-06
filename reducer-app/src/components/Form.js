import React, { useState } from "react";
import './form.styles.css'

function Form({ dispatch }) {
	const [todoName, setTodoName] = useState("");

	const handleChange = e => {
		setTodoName(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const todo = {
			item: todoName,
			completed: false,
			id: Date.now()
		};
		dispatch({
			type: "ADD_ITEM",
			payload: todo
		});
		setTodoName("");
	};

	const clearItems = e => {
		e.preventDefault();
		dispatch({
			type: "CLEAR_ITEMS"
		});
	};

	return (
		<form onSubmit={handleSubmit}className='form'>
			<input
				type="text"
				value={todoName}
				onChange={handleChange}
				name="todoName"
				className='input'
			/>

			<div><button className="button" type="submit">Submit </button>
			<button className="button" onClick={clearItems}>Clear  </button></div>
		</form>
	);
}

export default Form;
