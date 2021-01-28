export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
// export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

// ?? { type: 'ADD', payload: '' }

export const TodoReducer = (state, action) => {
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
		default:
			return state;
	}
};

export default TodoReducer;
