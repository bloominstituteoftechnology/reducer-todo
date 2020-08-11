import { useState, useReducer } from 'react';
import moment from 'moment';


const initialTodo = [{

  item: 'Your todo Item',
  completed: false,
  id: Date.now(),
  /*timeCompleted: (this.completed ? moment().format('MMMM Do YYYY, h:mm:ss a') : undefined)*/
}]
export const todoReducer = (state, action) => {
  console.log(`running todoReducer`)
  switch (action.type) {
    case 'ADD':
      let newList = state.slice()
      newList.push({
        item: action.payload.item,
        completed: false,
        id: Date.now(),
        timeTag: ''

      })
      return newList
    case 'COMPLETED':

    return state.map(item => {
      if (item.id == action.payload.id){
        //spread operator stops it from running 2 on stright mode.
        //flip the completed boolean key value pair
        //if the value of the key completed is true then time tag the todo
        return { ...item, completed: !item.completed, timeTag: !item.completed ? moment().format('MMMM Do YYYY, h:mm a') : ''}
      } else {
        return item
      }
    })

    case 'CLEAR':
      const clearCompletedTodos = state = action.payload.newTodo
      return clearCompletedTodos
    default:
      return state
  }
}
export default function useForm() {
  //state
  const [useInput, setUserInput] = useState('')
  const [todoList, setTodoList] = useReducer(todoReducer, initialTodo)

  //handles Changes on input
  function onChange(e) {
    //get the user input on the text area into the userInput state
    setUserInput(e.target.value)
  }
  //handle the submit button
  function onSubmit(e) {
    //stop page reload
    e.preventDefault()
    //get the userInput state text has the next todo into the todoList
    setTodoList({ type: 'ADD', payload: { item: useInput } })
    //clear input data
    setUserInput('')
  }
  //toggle completed
  const toggleCompleted = (e) => {
    //prvent page reload, and event propagation
    e.preventDefault()
    e.stopPropagation()

    console.log(`running toogleCompleted`)
    debugger
    //call the reducer and flip the completed boolean value
    const id = e.target.id
    setTodoList({ type: 'COMPLETED', payload: { id: id } })

  }
  //clear the todos
  function clearTodos() {
    //get a copy of how you want the list to look like
    const newTodo = todoList.filter(aTodo => {
      return aTodo.completed !== true
    })
    //override the todolist with this new array
    setTodoList({ type: 'CLEAR', payload: { newTodo } })
  }

  //return the state and setState
  return [useInput, todoList, onChange, onSubmit, toggleCompleted, clearTodos]
}