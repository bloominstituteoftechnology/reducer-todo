import * as moment from 'moment';
export const initialState = {
	todoArray: [
		{
			item: '',
			completed: false,
			id: 3892987589,
			time: '',
		},
	],
};

export const reducer = (state, action) => {
	//writing cases for adding a todo
	switch (action.type) {
		case 'ADD_TODO':
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now(),
				time: moment().format('LLLL'),
			};
			return {
				...state,
				todoArray: [...state.todoArray, newTodo], // state.todoArray.concat(newTodo)
			};
		case 'TOGGLE_TODO':
			return {
				...state,
				todoArray: state.todoArray.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: !todo.completed,
						};
					} else {
						return todo;
					}
				}),
			};
		case 'CLEAR_COMPLETED':
			return {
				...state,
				todoArray: state.todoArray.filter((todo) => !todo.completed),
			};
		default:
			return state;
	}
};
