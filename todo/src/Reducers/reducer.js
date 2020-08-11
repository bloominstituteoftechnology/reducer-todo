import React, { useState, useReducer } from "react";

export const initialState = {
    todo: [
        {
            task: 'git good',
            id: 1,
            completed: false,
          },
          {
            task: 'learn how to code',
            id: 2,
            completed: false,
          },
          {
            task: 'idk what to do these days',
            id: 3,
            completed: false,
          },
          {
            task: 'play video games',
            id: 4,
            completed: false,
          },
    ]
}
  
export const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todo: [
            ...state.todo,
            {
                task: action.payload,
                id: new Date(),
                completed: false,
            }
        ]
      };
    case 'TOGGLE_COMPLETED':
        return{
            ...state,
            todo: state.todo.map(task =>{
                if(task.id === action.payload.id){
                    return {
                    task: action.payload.task,
                    id: action.payload.id,
                    completed: !action.payload.completed
                    }
                }
                return task
            })
        }
    case 'CLEAR_COMPLETED':
        return{
            ...state,
            todo: state.todo.filter(task =>task.completed === false)
            
        }
      default:
        return state;
    }
  };

