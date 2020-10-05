import React from "react";

const initialState = [
	{
		text: "Learn about reducers",
		completed: false,
		id: Date.now(),
	},
];

export default function reducer(state, action) {
	switch (action.type) {
		case "addTodo":
			return {
				todos: [
					...state.todos,
					{ text: action.payload, completed: false, id: Date.now() },
				],
			};
		case "toggleTodo":
			return {
				todos: state.todos.map((todo, i) =>
					i === action.i ? { ...todo, complete: !todo.completed } : todo
				),
			};
		default:
			return state;
	}
}
