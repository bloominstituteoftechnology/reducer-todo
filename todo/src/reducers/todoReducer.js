import React, { useReducer } from 'react';
import { TOGGLE_COMPLETE, ADD_TODO } from '../actions.js/todoActions';

export const initialState = {
  todos:  [
    {
      item: 'Learn about reducers',
      complete: false,
      id: 3892987589
    },
    {
      item: 'Complete MVP',
      complete: false,
      id: 3892987590
    },
    {
      item: 'Practice more reducers',
      complete: false,
      id: 3892987591
    }
  ],
  searchTerm: "",
};

let nextId = 3892987592;

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("add todo action called in the reducer")
      console.log("state in reducer component", state)

      return { 
        ...state, 
        todos: [...state.todos, { item: action.payload, complete: false, id: nextId++ }],
      };

    // case DELETE_TODO:
    // console.log("delete todo action called in the reducer")
    // return { 
        // ...state, 
        // todo}

    case TOGGLE_COMPLETE:
      console.log("toggle complete action called in the reducer")
      return { 
        ...state,
        todo: state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {...todo, complete: !todo.complete}
        } else {
          return todo;
        }
      })};
    
      /*
    case UPDATE_SEARCHTERM:
    console.log("update search term called in the reducer")
    return { 
        ...state, 
        searchTerm: action.searchTerm,
      };
      */

    default:
      return state;
    };
  };

  export default todoReducer;

// ALWAYS start with {...state,} in return values, to make sure that all values from previous state object is included in the new state object

// state object {item: string, completed: boolean, id: integer}

