import React, { useReducer } from 'react';

// Initial State
export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
        item: 'Forget about reducers',
        completed: false,
        id: 3892987590
      },
      {
        item: 'Re-Learn about reducers',
        completed: false,
        id: 3892987591
      },
      {
        item: 'Be reminded about reducers',
        completed: false,
        id: 3892987592
      },
      {
        item: 'Remind someone else about reducers',
        completed: false,
        id: 3892987593
      },

      {
        item: 'Remind someone else about reducers',
        completed: false,
        id: 3892987599
      }
    ]

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':

          console.log('state: ', state, 'action: ', action)
          
          return  [...state,{
            
            item: action.payload,
            completed: false,
            id: Date.now(),
               
          }]

        case 'TOGGLE':
          let complete = state.map(toggle => {
            if(toggle.id === action.payload){
              return {
                ...toggle,
                completed: !toggle.completed
              }
            }
            else {
              return toggle;
            }
          })

          return complete;
          case 'CLEAR':
              let remove = state.filter(item => {
                if (item.completed) {
                  return !item.completed
                } else {
                  return item
                }
              })
              return remove
        default:
            return state;
    }
}