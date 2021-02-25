import React, {useReducer, useState} from 'react';
import { todoReducer, initialState } from '../reducers/Todo';



 const Form = () => {
 const [state, dispatch]= useReducer(todoReducer, initialState);
 const [form, setForm]= useState('');


    const clearTodo = () => {
     dispatch({
        type: 'CLEAR_TODO', 

      })
    }


    const toggleTodo = (todo) => {
       dispatch({
           type: 'TOGGLE_COMPLETE', 
           payload: todo 
       })
    };

    const inputHandler = e => {
      setForm(e.target.value)
        };



     const submitTodo = e => {
            e.preventDefault();

            dispatch({
                type: 'ADD_TODO', 
                payload: {
                    item: form, 
                    complete: false,
                    id: Date.now()
                }
            })
            setForm('');
          };


    return (
        <div>
            <form onSubmit={submitTodo}>
                <button type="submit">Add Task</button>
                <button onClick={clearTodo}>Clear Task</button>
                <label htmlFor="todo">
                   <input type="text" value={form} id="todo" name="todo" onChange={inputHandler}/>
                </label>
            </form>


            <div>
                {state.todo.map((task)=>(
                    <p onClick={()=>{toggleTodo(task)}}>{task.item}</p>
    ))}
            </div>
        </div>
    )
}

export default Form; 