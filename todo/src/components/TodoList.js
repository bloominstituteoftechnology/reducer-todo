import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducers'

const TodoList = _ => {
    const [todo, setTodo] = useState("");
    const [ state, dispatch ] = useReducer(reducer, initialState);

const handleChanges = e => {
    setTodo(e.target.value)
};

const addNewTodo = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo});
    setTodo("")
}

    return (
        <div>
        {state.todos.map(elem => (
            <div
              key={elem.id}
              onClick={() =>
                dispatch({ type: "TOGGLE_COMPLETED", payload: elem.id })
              }
              className={elem.completed ? "completed" : ""}
            >
              {elem.item}
            </div>
          ))}

            <label htmlFor="todo">
                Todo
                <input 
                    id="todo"
                    name="todo"
                    type="text"
                    value={todo}
                    placeholder="Enter New Todo"
                    onChange={handleChanges}
                />
            </label>
            
            <button type="submit" onClick={addNewTodo}> 
                Add Todo
            </button>
            <button onClick={() => dispatch( {type: "CLEAR_COMPLETED"})}> 
                Clear
            </button>

            
        </div>
    )
}

export default TodoList


