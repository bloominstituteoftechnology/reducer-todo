import { NEW_TODO, FINISHED_TODO, TOGGLE_TODO } from "../Actions/index";

export const initialState = {
	todos: [
		{
			item: "Learn about Reducers",
			completed: false,
			id: 3892987589,
		},
		{
			item: "Study Python",
			completed: false,
			id: 3892987591,
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_TODO:
			return {
				todos: [...state.todos, { item: action.payload, id: Date.now() }],
			};
		case FINISHED_TODO:
			return {
				todos: state.todos.map((todos) => {
					return Number(todos.id) === Number(action.payload)
						? { item: todos.item, id: todos.id, completed: !todos.completed }
						: todos;
				}),
			};
		case TOGGLE_TODO:
			return {
				todos: state.todos.filter((todos) => {
					return todos.completed === false;
				}),
			};
		default:
			return state;
	}
};

export default reducer;
