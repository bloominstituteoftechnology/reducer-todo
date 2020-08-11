import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducers'

const TodoList = _ => {
    const [todo, setTodo] = useState("");
    const [ state, dispatch ] = useReducer(reducer, initialState);



    return (
        <div>
          


        </div>
    )
}

export default TodoList
