import React from 'react';
import ReactDOM from 'react-dom'

export const initialState  = [ {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      } //  initial state object/shape
    ];



export const Reducer = (state, action ) => {
    switch (action.type) {
        case 'add':
        const newItem = {
         item:action.payload,
         completed:false,
         id:Date.now()

         }
          return [...state, newItem]
          case "Checkoff":
          return state.map(i => i.id === action.id ? {...i,completed: !i.completed } :i)
       case "Delete":
      return state.filter(i => !i.completed)

    

        }
        return state; 
}