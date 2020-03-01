import React, {useReducer} from 'react';

export const initialState = {
    todos: [
    {
    item: 'Learn About Reducers',
    completed: false,
    id: 1001,
    },
]}
    
//actions: add_todo, toggle_complete, clear_completed

export function todoReducer(state, action){
    switch(action.type){
        case 'ADD_TODO': 
            return {
                ...state, todos: [...state.todos, {item: action.payload, id: Date.now(),
                completed:false,}]
            }
        default:
            return state;

    }
};

