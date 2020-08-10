import {useState, useReducer} from 'react';
const initialTodo = [{
    description: 'Todo list item'
  }]
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        let newList = state.slice()
        newList.push({ description: action.payload.description })
        return newList
      case 'EDIT':
        const newEdit = state.slice()
        newEdit.forEach(item => {
          if (item.description === action.payload.description) {
            item.description = action.payload.edit
          }
        })
        return newEdit
      case 'DELETE':
        let newDelete = state.slice()
        let indexDelete
        newDelete.forEach((item, index) => {
          if (item.description === action.payload.description) {
            indexDelete = index
          }
        })
        //delete the index by inserting nothing has it's replacement
        newDelete = newDelete.splice(indexDelete, 0)
        return newDelete
      default:
        return state
    }
  }
export default function useForm(){
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
        setTodoList({ type: 'ADD', payload: { description: useInput } },)
        //clear input data
        setUserInput('')
      }

    //return the state and setState
    return [useInput, todoList, onChange, onSubmit]
}