export const initialState = {
	todos: [
		{
			text: "Learn about reducers",
			completed: false,
			id: 3892987589,
		},
	],
};

export function reducer(state, action) {
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
					i === action.i ? { ...todo, completed: !todo.completed } : todo
				),
			};
		case "deleteTodo":
			return {
				todos: state.todos.filter((todo, i) => todo.completed === false),
			};
		default:
			return state.todos;
	}
}
