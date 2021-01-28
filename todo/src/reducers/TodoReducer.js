export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
// export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

// ?? { type: 'ADD', payload: '' }

export const TodoReducer = (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, item: action.payload, editing: false };
		case TOGGLE_COMPLETE:
			return { ...state, editing: !state.editing };
		default:
			return state;
	}
};
