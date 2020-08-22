// import { reducer, initialState } from "../reducers/reducer";
import React from 'react';

export const initialState=[{
    item:'',
    completed:false,
    id: ''}]


export const NEW_TODO='NEW_TODO'

export const TOGGLE_TODO='TOGGLE_TODO'

export const FILTER_COMPLETED_TODOS='FILTER_COMPLETED_TODOS'

// action creator
// function newTodo(){
//     return{
//         type: NEW_TODO
//     }
// }

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case NEW_TODO:
            return [...state, {item: action.payload, completed: false, id:new Date()}];
        case TOGGLE_TODO:
            return state.map((task,id)=>{
                if(task.id===action.payload){
                    task.completed=!task.completed}
                }),[...state];
            // add map of state
            // if else 
        case FILTER_COMPLETED_TODOS:
            return state.filter(item=>
                item.completed===false);
        // filter completed events
        default: 
            return('default');
    }
    
}



