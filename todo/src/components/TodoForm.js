import React from 'react';

const TodoForm = props => {
    const { value, setValues, dispatch } = props

    const handleChanges = e => {
        setValues(e.target.value)
      }

    const onSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'NEW_TODO', payload: value })
        setValues('')
    }
    return (
        <div className="todo-form-container">
            <form onSubmit={onSubmit}>
                <label> Add:&nbsp;
                  <input 
                  type="text"
                  name="newItem"
                  placeholder="...what to do?"
                  onChange={handleChanges}
                  value={value}
                  />  
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm