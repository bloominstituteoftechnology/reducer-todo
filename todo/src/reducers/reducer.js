import {useReducer} from 'react';

export const initialState = {
    tasks:[
        {
        task: 'Eat the apples.',
        id: 22,
        completed: false,
        },
        {
        task: 'Cut paper.',
        id: 23,
        completed: false,
        },
        {
        task: 'Rake the dirt.',
        id: 24,
        completed: false,
        },
        {
        task: 'Find secret treasure.',
        id: 25,
        completed: false,
        },
]};

export const reducer = (state, action) => {
    switch (action.type){

        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                tasks: state.tasks.map(task=>{
                    if (task.id === action.payload){
                        return { ...task, completed: !task.completed}
                    } 
                    else {
                        return task;
                    }
                })
            };


        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {task: action.payload, completed: false, id: Date.now()}]
            };


        case 'CLEAR_COMPLETED':
            return {...state, tasks: state.tasks.filter(task => !task.completed)};
        default:
            return state;
    }
}