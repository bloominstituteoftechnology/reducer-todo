import React from 'react';

export const initialState = [{
    item: 'Learn how to code',
    completed: false,
    id: Date.now(),
    itemArray: []
}];

export const Reducer = (state, action) => {
    switch (action.type){
        case "ADD-TODO":
            const todo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, todo]
        case "COMPLETED":
            return state.map(e => e.id ===action.id ? {...e, completed: !e.completed } : e);
        case "REMOVE":
            return state.filter(e => !e.completed);
        default:
            return state;
    }
}