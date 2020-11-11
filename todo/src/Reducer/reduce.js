import React from 'react'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
const GET_TODOS = 'GET_TODOS'


export const defaultState = {
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
      id: 3,
      task: 'Testing Web Applications',
      completed: false
    }
  ]
}

export const reducer = (previousState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...defaultState.todos, {
          id: Date.now(),
          task: action.payload,
          completed: true
        }]
      }
    case 'TOGGLE_COMPLETED':
      return {
        todos: defaultState.todos.map(singleTask => {
          if (singleTask.id === action.payload.id) {
            return {
              id: action.payload.id,
              task: action.payload.task,
              completed: !singleTask.completed
            }
          }
          return singleTask
        })
      }
    case 'CLEAR_COMPLETED':
      return {
        todos: defaultState.todos.filter(singleTask => {
          return !singleTask.completed
        })
      }
    case 'GET_TODOS':
      return defaultState
    default:
      return defaultState
  }
}



