import React,{ useReducer} from 'react';

import Todo from './Todo'
import TodoForm from './TodoForm'
import {todoReducer, initialState} from '../reducers/todoReducers'

//right here is the meat of the app.
//pass all major components through here. This (ToDoList.js) is then passed onto the App.js
//set useReducer in this file
//map the state HERE! In order to get it to display correctly, we have to pass Todo.js
//Also, cannot forget to pass dispatch={dispatch} on both the Todo & TodoForm!

export default function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <div>
            {state.map( todo => {
                return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })}
            <TodoForm dispatch={dispatch} />
        </div>
    )
}