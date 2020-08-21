import React from 'react';

export const todo = [
	{
		item: 'Learn about reducers',
		completed: false,
		id: 234234
	},
	{
		item: 'Finish todo list app',
		completed: true,
		id: 32423423
	}
];

export function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			if (action.payload === '') {
				return state;
			}
			console.log('we are in ADD_TODO', state);
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return [ ...state, newTodo ];
		case 'COMPLETE':
			return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
		case 'REMOVE_COMPLETED':
			return state.filter((item) => !item.completed);
		case 'REMOVE_ALL':
			return [];
		default:
			return state;
	}
}