import React, {useReducer, useState} from 'react'

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            console.log(state)
            return {
              todo: [...state.todo, {item: action.payload}]
            }
        case "TOGGLE-TODO":
            return {
                todo: state.todo.map((item, i) => i === action.i ? {...item, completed: !item.completed} : item)
            }
        default: return state;
    }
}

export const initialState = 
{
    item: 'Learn about reducers',
    completed: false,
    id: ''
}
