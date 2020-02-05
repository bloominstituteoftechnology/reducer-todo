import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export const initialState = [
    {
        name: "Play Video Games",
        id: 1,
        complete: false
    },
    {
        name: "Take Pictures",
        id: 2,
        complete: false
    },
    {
        name: "Get Passport",
        id: 3,
        complete: false
    },
    {
        name: "Run mile",
        id: 4,
        complete: false
    },
    {
        name: "Work Out",
        id: 5,
        complete: false
    },
    {
        name: "Walk Dogs",
        id: 6,
        complete: false
    }
];
export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: new Date(),
                    name: action.payload,
                    complete: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, complete: !todo.complete }
                    : todo
            )
        default:
            return state
    }
};