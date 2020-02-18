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

export const todoReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':

          console.log('state: ', state, 'action: ', action)
          return {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        default:
            return state;
    }
}