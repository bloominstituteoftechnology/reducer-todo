import React from 'react'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
const GET_TODOS = 'GET_TODOS'


export const state = {
  todos: [
    {
      id: 1,
      task: 'Study Class Components',
      completed: false
    },
    {
      id: 2,
      task: 'The React Lifecycle',
      completed: false
    },
    {
      id: 3,
      task: 'Composing and Sharing Non - Visual Behavior',
      completed: false
    },
    {
      id: 4,
      task: 'Testing Web Applications',
      completed: false
    }
  ]
}

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...initialState.todos,
          {
            id: Date.now(),
            item: action.payload,
            completed: true
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