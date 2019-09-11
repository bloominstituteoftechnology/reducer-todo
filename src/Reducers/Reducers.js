import React, {useReducer} from 'react'
import App from '../App'




const TodoReducer = () => {
const initialState ={}
const reducer = (state, action) => {
  switch(action.type) {
      case 'addTodo':
        return (
        App.addTodo())
       
      case 'decrement':
        return { count: state.count - 1 }
      default:
        return (
        reducer(initialState, { type: 'addToDo' }),
        reducer(initialState, { type: 'decrement' })
        )
      }
  }
    


}

export default TodoReducer