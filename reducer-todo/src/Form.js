import React, { useReducer, useState } from 'react';
import { initialState, Reducer }from './reducers/reducer'
import { Display } from './Display'

export const Form  = () => {
const [state, dispatch] = useReducer(Reducer, initialState)
const [todo, setTodo] = useState("");

const handleChange = (e) => {
    setTodo(e.target.value)
}
const handleSubmit = e => {
    e.preventDefault();
    dispatch({type:"add", payload:todo})

}
const clear = e => {
    e.preventDefault();
    dispatch({type:"Delete", payload:todo })
}
return (
    <div>
        <form>
            <input 
            id="todo"
            name="todo"
            type="text"
            value={todo}
            onChange={handleChange}>
            </input>

<button onClick={handleSubmit}> Add </button>
<button onClick={clear}> Delete</button>
            </form>

        {/* <button onClick={()  => dispatch({type:"Delete"})}> Delete </button>
        <button onClick={()  => dispatch({type:"add"})}> add</button> */}
    <Display id={state.id} todo={todo} dispatch={dispatch} state={state}/>
    </div>

)
}
  
