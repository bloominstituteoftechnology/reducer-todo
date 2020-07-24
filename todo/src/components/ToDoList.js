import React, {useReducer, useEffect} from 'react'
import ToDoItem from './ToDoItem'
import {initialState,reducer} from '../reducers/reducer'
import ToDoForm from './ToDoForm'

const ToDoList = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <>
            <ToDoForm dispatch={dispatch}/>

            {state.map(toDo =>
                <ToDoItem key={toDo.id}toDo={toDo} dispatch={dispatch}/>
            )}
        </>
    )
}

export default ToDoList