const todoReducer = (state, action) => {
	console.log('reducer', action.payload);
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						item: action.payload,
						completed: false,
						id: Date.now()
					}
				]
			};

		case 'TOGGLE_TODO':
			return {
				...state,
				todos: [
					...state.todos.map(item => {
						if (item.id !== action.payload) {
							return item;
						} else {
							return {
								...item,
								completed: !item.completed
							};
						}
					})
				]
			};

		default: {
			return state;
		}
	}
};

export default todoReducer;
