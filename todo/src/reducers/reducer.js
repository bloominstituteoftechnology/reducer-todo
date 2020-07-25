import React from 'react';


export const todo = [
    {
        item: 'comb hair',
        completed: false,
        id: 2
    },
    {
        item: 'eat cheese',
        completed: false,
        id: 3
    },
    {
        item: 'charge phone',
        completd: false,
        id: 4
    }
];

export const reducer = (state, action) => {
    switch(action.type){
        case "Get_TODOS":
            return {
                ...state,
                todos: action.payload
            };
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case "CLEAR_TODOS":
            return {
                ...state,
                todos: [
                    ...state.todos.filter((todo) => {
                        return todo.completed !== true
                    })
                ]
            }
        case "TOGGLE_COMPLETED":
            return state.map((e) => {
                if (e.id ===action.payload) {
                    return {...e, completed: !e.completed}
                }
                else {
                    return e
                }
            });
            
    default:
    return state;
}
};