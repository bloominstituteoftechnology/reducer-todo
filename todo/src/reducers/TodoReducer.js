export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETEDs";

export const initialState = {
	todoList: [
		{
			item: "Wash Dishes",
			completed: false,
			id: "1234",
		},
		{
			item: "Do Laundry",
			completed: false,
			id: "2345",
		},
		{
			item: "Empty Trash",
			completed: false,
			id: "3456",
		},
	],
};

// ?? { type: 'ADD', payload: '' }

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				item: action.payload,
				completed: false,
				id: Date.now(),
			};
		case TOGGLE_COMPLETE:
			return { ...state, completed: !state.completed };
		case CLEAR_COMPLETED:
			return {
				...state,
				todoList: state.todoList.filter((item) => !item.completed),
			};
		default:
			return state;
	}
};

export default todoReducer;
