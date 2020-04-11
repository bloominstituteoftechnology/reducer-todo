import React from 'react';

export const initialState = { todos : [] }

const TodoReducer = (state,action) => {
   
    
    switch(action.type){
        case 'ADD_TODO':
            console.log({ todos : [...state.todos , action.payload] })
            return { todos : [...state.todos , action.payload] }
        case 'MARK_COMPLETED':
            console.log(action.payload)
            const list = state.todos.map((todo) => {
                if(todo.id === action.payload){
                   return{...todo, completed : !todo.completed} 
                } else{
                    return todo
                }
            })
            return { todos : list }
        case 'CLEAR_COMPLETED':
            const array = state.todos.filter(todo => {
                return todo.completed === false
            })
            console.log(array)
            return {todos : array }
        default:
            return state
    }
}

export default TodoReducer;
