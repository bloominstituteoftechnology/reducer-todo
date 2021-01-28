import React, { useState, useReducer } from "react";

import todoReducer, {
	ADD_ITEM,
	TOGGLE_COMPLETE,
} from "../reducers/todoReducer";

const initialState = {
	item: "wash dishes",
	completed: false,
	id: "1234",
};

const Todo = () => {
	// !! Application level state
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const { item, completed } = state;

	// !! Component level state
	const [newItem, setNewItem] = useState(item);

	// !! Change handler
	const handleChanges = (e) => {
		setNewItem(e.target.value);
	};

	// !! JSX
	return (
		<div>
			{!completed ? (
				<h1>
					{item}{" "}
					<i
						onClick={() => {
							// ?? setCompleted
							dispatch({ type: TOGGLE_COMPLETE });
						}}
						className="completed"
					/>
				</h1>
			) : (
				<div>
					<input
						className="item-input"
						type="text"
						name="newItem"
						value={newItem}
						onChange={handleChanges}
					/>
					<button
						onClick={() => {
							// ?? Add item
							dispatch({
								type: ADD_ITEM,
								payload: newItem,
							});
						}}
					>
						Add Item
					</button>
				</div>
			)}
		</div>
	);
};

export default Todo;
