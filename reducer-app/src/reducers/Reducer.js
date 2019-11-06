export const initialState = {
	todos: [
		{
			item: "Clear Tavern of Giant Mutated Rats",
			completed: false,
			id: 3892987589
		},
		{
			item: "Gather Wildflowers for Gordy's Potion",
			completed: false,
			id: 3892947589
		},
		{
			item: "Lead Revolt against the Young Prince",
			completed: false,
			id: 3892987569
		}
	]
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				todos: [...state.todos, action.payload]
			};

		case "TOGGLE_ITEM":
			return {
				...state,
				todos: [...state.todos].map(todo => {
					return todo.id === action.payload
						? {
								...todo,
								completed: !todo.copmpleted
						  }
						: todo;
				})
			};

		case "CLEAR_ITEMS":
			return {
				...state,
				todos: state.todos.filter(todo => {
					return !todo.completed;
				})
			};

		default:
			return state;
	}
};
