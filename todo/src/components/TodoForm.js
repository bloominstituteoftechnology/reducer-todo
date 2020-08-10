import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/reducer'


const TodoForm = () => {
    const [ state, dispatch ] = useReducer( todoReducer, initialState )
    const [ value, setValues ] = useState('')

    const handleChanges = e => {
        setValues(e.target.value)
      }

    return (
        <div className="todo-form-container">
            <form>
                <label> Add:&nbsp;
                  <input 
                  type="text"
                  name="newItem"
                  placeholder="...what to do?"
                  onChange={handleChanges}
                  value={value}
                  />  
                </label>
            </form>
        </div>
    )
}

export default TodoForm