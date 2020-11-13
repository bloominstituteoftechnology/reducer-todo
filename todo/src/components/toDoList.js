import { initialState, toDoReducer, ADD_ITEM, DONE, CLEAR } from '../reducers/reducers'
import React, {useState, useReducer} from 'react'

const ToDoList =  () => {
    const [newTask, setNewTask] = useState()
    const [state, dispatch] = useReducer(toDoReducer, initialState);

    const handleChanges = (e) => {
         setNewTask(
         e.target.value
        )
    }

    return (
    <div>
        {state.list.map(todo => {
            return <p className={`item${todo.completed ? " purchased" : ""}`} onClick= {() => dispatch({type: DONE, payload: todo.id})}>{todo.item}</p>
        })}

         <input 
                    type="text"
                    name="item"
                    onChange={handleChanges}
                    value={newTask}
                    />
                <button onClick={()=>{
                dispatch({
                    type: ADD_ITEM,
                    payload: newTask
                })
            }}> Add</button>

            <button onClick={()=>{
                dispatch({
                    type: CLEAR,
                    payload: newTask
                })
            }}>clear todos</button>
    </div>


    )
}
export default ToDoList