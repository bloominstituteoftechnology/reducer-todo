s
import React from 'react';

export const state = {
  todos: [
    {
      id: 1,
      item: 'Study Class Components',
      completed: true
    },
    {
      id: 2,
      item: 'The React Lifecycle',
      completed: true
    },
    {
      id: 3,
      item: 'Composing and Sharing Non - Visual Behavior',
      completed: false
    },
    {
      id: 4,
      item: 'Testing Web Applications',
      completed: true
    }
  ]
};

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...initialState.todos,
          {
            id: Date.now(),
            item: action.payload,
            completed: false
          }
        ]
      };
    case "TOGGLE_COMPLETED":
      return {
        todos: initialState.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              id: action.payload.id,
              item: action.payload.item,
              completed: !todo.completed
            };
          }

          return todo;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        todos: initialState.todos.filter(todo => {
          return !todo.completed;
        })
      };
    case "GET_TODOS":
      return initialState;
    default:
      return initialState;
  }
}; 