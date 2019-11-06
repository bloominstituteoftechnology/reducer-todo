import React from 'react';
import ReactDOM from 'react-dom';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now(),
        itemArray: []
    }
];

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, newTodo]
        default:
            throw state;
    }
};