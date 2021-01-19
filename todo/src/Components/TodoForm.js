import React from "react";

const TodoForm = ({ handleSubmit, handleChange, input }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="todo"
					type="text"
					name="todo"
					placeholder="Add a New Task"
					value={input}
					onChange={(e) => handleChange(e)}
				/>
				<button className="submit-btn">+</button>
			</form>
		</div>
	);
};

export default TodoForm;
