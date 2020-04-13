import React, { useState, useReducer } from 'react';

export const initialState = {
	todoArray: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589,
		},
	],
};

export const reducer = (state, action) => {
	// default: return state
};
